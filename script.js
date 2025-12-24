const video = document.getElementById('webcam');
const objectNameElem = document.getElementById('object-name');
const descriptionElem = document.getElementById('description');
const funFactElem = document.getElementById('fun-fact');

let model;
let lastObject = '';

const funFacts = {
  banana: "Bananas are berries, but strawberries aren't!",
  cup: "Ancient Greeks used cups called 'kylix'.",
  spoon: "NASA used titanium spoons on Apollo 11.",
  apple: "The apple tree originated in Central Asia.",
  book: "The oldest known book is 'Diamond Sutra' from 868 AD."
};

async function setupWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;

    return new Promise((resolve) => {
      video.onloadeddata = () => resolve();
    });
  } catch (err) {
    alert('Error accessing webcam: ' + err.message);
  }
}

async function loadModel() {
  model = await mobilenet.load();
  console.log('MobileNet model loaded');
}

async function classifyFrame() {
  if (!model) return;

  const predictions = await model.classify(video);

  if (predictions.length > 0) {
    // Take the first predicted class (clean it up)
    const objectNameRaw = predictions[0].className.split(',')[0];
    const objectName = objectNameRaw.toLowerCase();

    if (objectName !== lastObject) {
      lastObject = objectName;

      // Update UI with fade effect
      fadeOutIn(objectNameElem, `Detected: ${capitalize(objectName)}`);
      fadeOutIn(descriptionElem, 'Loading info...');
      fadeOutIn(funFactElem, '');

      // Fetch Wikipedia summary and fun fact
      fetchWikipediaSummary(objectName);
      showFunFact(objectName);
    }
  }
}

async function fetchWikipediaSummary(objectName) {
  try {
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(objectName)}`);

    if (!response.ok) {
      fadeOutIn(descriptionElem, "No Wikipedia info found.");
      return;
    }

    const data = await response.json();
    fadeOutIn(descriptionElem, data.extract || "No summary available.");
  } catch (error) {
    fadeOutIn(descriptionElem, "Error fetching Wikipedia info.");
  }
}

function showFunFact(objectName) {
  const fact = funFacts[objectName] || "";
  fadeOutIn(funFactElem, fact);
}

// Utility: Capitalize first letter
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Utility: Fade out-in text change for smooth UI update
function fadeOutIn(element, newText) {
  element.style.opacity = 0;
  setTimeout(() => {
    element.textContent = newText;
    element.style.opacity = 1;
  }, 300);
}

async function main() {
  await setupWebcam();
  await loadModel();

  // Classify every 2 seconds
  setInterval(classifyFrame, 2000);
}

main();
