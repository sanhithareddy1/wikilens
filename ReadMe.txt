ABOUT THE PROJECT

WIKI-LENS is a browser-based educational web application that turns your webcam into a learning tool. By pointing your camera at real-world objects, the app detects what it sees and instantly displays Wikipedia summaries and fun facts.

The project is fully frontend-based and runs directly in the browser without any backend or installation.

FEATURES

Live webcam-based object detection

Real-time object recognition using TensorFlow.js and MobileNet

Instant Wikipedia summaries for detected objects

Fun facts to make learning engaging

Lightweight, responsive, and easy to use

No backend or database required

PROJECT STRUCTURE

wiki-lens/

index.html : Main HTML file

style.css : Styling and layout

script.js : Webcam access, ML logic, and Wikipedia API calls

GETTING STARTED

OPTION 1: RUN DIRECTLY (FASTEST)

Download or clone the project folder.

Open index.html in a modern browser (Chrome or Firefox recommended).

Allow webcam access when prompted.

Point the camera at objects and explore.

Note: Some browsers restrict webcam access without a server.

OPTION 2: RUN USING A LOCAL SERVER (RECOMMENDED)

Using Python 3:

Open terminal and navigate to the project folder:
cd wiki-lens

Start a local server:
python3 -m http.server 8000

Open a browser and go to:
http://localhost:8000

HOW IT WORKS

Accesses the webcam stream.

Loads the MobileNet object detection model using TensorFlow.js.

Captures video frames every few seconds.

Detects objects from the video feed.

Uses the detected object name to query the Wikipedia REST API.

Displays:

Object name

Wikipedia summary

Fun fact (if available)

TECH STACK

HTML5

CSS3

JavaScript

TensorFlow.js

MobileNet (pre-trained model)

Wikipedia REST API

KNOWN LIMITATIONS

Some object names may not match exact Wikipedia article titles.

Webcam access may require HTTPS or a local server in certain browsers.

FUTURE ENHANCEMENTS

Save detected object history

Voice-based explanations

Interactive quiz mode

Expanded fun-fact database

Offline caching for known objects

TROUBLESHOOTING

Problem: Webcam not loading
Solution: Check browser permissions

Problem: Empty Wikipedia summary
Solution: Try a different object or angle

Problem: CORS issues
Solution: Run using a local server or deploy via GitHub Pages

DEPLOYMENT

You can deploy this project using GitHub Pages:

Upload the project folder to a GitHub repository.

Go to repository Settings.

Open Pages section.

Select main branch and root directory.

Save and access the live site.

CONTRIBUTING

Contributions, suggestions, and forks are welcome.
Feel free to improve features, UI, or performance.

Learning starts with curiosity.
WIKI-LENS helps you explore the world, one object at a time.
