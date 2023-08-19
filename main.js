var noseX=0;
var noseY=0;
var moustache="";

function preload(){
    moustache=loadImage("https://i.postimg.cc/C5vK8S7B/moustache.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
}
function modelloaded(){
    console.log("model is loaded")
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, noseX, noseY, 30, 30);
}
function takesnapshot(){
    save("mypicture.png");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-200;
        noseY=results[0].pose.nose.y-100;
        console.log("noseX" +results[0].pose.nose.x);
        console.log("noseY" +results[0].pose.nose.y);
    }
}