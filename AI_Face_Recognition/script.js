const video = document.getElementById("video");

Promise.all([
    faceapi.nets.tnyFaceDetector.loadFromUri('./weights'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./weights'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./weights'),
    faceapi.nets.faceExpressionNet.loadFromUri('./weights')
]).then(startVideo)


function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

startVideo();