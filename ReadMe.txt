# WIKI-LENS

**Tagline:** Show. Learn. Amaze.

---

## 📚 Overview

**WIKI-LENS** is a fun and educational web application that uses your **webcam** to recognize real-world objects and instantly provide interesting facts and Wikipedia summaries about them. Just point your camera at anything — and let WIKI-LENS teach you about it in real time!

---

## ✨ Features

- 🎥 **Live Webcam Object Detection**  
  Uses [TensorFlow.js](https://www.tensorflow.org/js) + MobileNet to identify objects from your webcam feed.

- 📖 **Instant Knowledge Cards**  
  Fetches real-time Wikipedia summaries about detected objects.

- 🎉 **Fun Fact Generator**  
  Displays quirky, educational trivia for popular objects.

- ⚡ **No Backend Needed**  
  Entirely frontend-powered and runs right in the browser.

- 📱 **Lightweight & Responsive**  
  Clean UI, mobile-friendly, and no installation needed.

---

## 📂 Project Structure

```

/wiki-lens
├── index.html        # Main HTML page
├── style.css         # Styling for UI
└── script.js         # App logic (webcam + ML + Wikipedia)

````

---

## 🚀 Getting Started

### Option 1: Run Directly (Quickest)

1. Download or clone the project files.
2. Open `index.html` in a browser (Chrome/Firefox).
3. Grant webcam access.
4. Show objects and enjoy live learning!

### Option 2: Run via Local Server (Recommended)

Using Python 3:

```bash
cd wiki-lens
python3 -m http.server 8000
````

Then open your browser to:
**[http://localhost:8000](http://localhost:8000)**

---

## 🧠 How It Works

1. Loads the webcam stream.
2. Loads the MobileNet machine learning model.
3. Captures video frames and runs object detection every 2 seconds.
4. Detects object → gets its name → calls the Wikipedia API.
5. Displays:

   * 🟢 Object name
   * 📘 Wikipedia summary
   * 🌟 Fun fact (if available)

---

## 🔧 Tech Stack

* **HTML5 + CSS3 + JavaScript**
* **TensorFlow\.js** – Machine learning in the browser
* **MobileNet** – Pre-trained lightweight object classifier
* **Wikipedia REST API** – Real-time info for detected objects

---

## 💡 Possible Future Enhancements

* Save object history for user learning
* Add voice assistant support
* Fun fact database expansion
* Object guessing quiz mode
* Offline caching of known object summaries

---

## 🐞 Troubleshooting

| Problem                 | Solution                                               |
| ----------------------- | ------------------------------------------------------ |
| Webcam not loading      | Allow permission in browser                            |
| Blank Wikipedia summary | Some object names may not match exact Wikipedia titles |
| CORS issues             | Use local server or deploy via GitHub Pages            |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Made with ❤️ by \[Murari]
Feel free to contribute or fork the project!

---

## 🌐 Live Demo (Optional)

You can host this on **GitHub Pages** by uploading the folder to a repo and enabling Pages under Settings → Pages.

---

> Learning starts with curiosity.
> WIKI-LENS helps you discover the world around you, one object at a time.
