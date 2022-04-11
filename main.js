video = "";
status_1 = "";
object_name = "";


function setup(){
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(480,380);
    canvas.center();
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDatector = ml5.objectDetector('cocossd', model_loaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
   object_name = document.getElementById("input").value;
}

function model_loaded(){
    console.log("Model Loaded!");
    status_1 = true;
}