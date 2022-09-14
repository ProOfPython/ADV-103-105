Webcam.set({
    width: 350,
    height: 300,
    image_formant: 'png',
    png_quality: 90,
})

camera = document.getElementById('camera')
sorter = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/90ldstgRm/model.json', modelLoaded)
Webcam.attach('#camera')

function snapCam(){
    Webcam.snap(function(data){
        document.getElementById('result').innerHTML = '<img id = "camSnap" src = "'+data+'">'
    })
}
function modelLoaded(){
    console.log('Model loaded.')
}
function labelImg(){
    img = document.getElementById('result')
    sorter.classify(img, gotResult)
}

function gotResult(error, results){
    if (error){
        console.errer(error)
    } else {
        console.log(results)
        document.getElementById('objectName').innerHTML = results[0].label
        document.getElementById('objectAccr').innerHTML = results[0].confidence.toFixed(3)
    }
}