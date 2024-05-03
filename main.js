nosex = 0;
nosey = 0;
function preload() {
mustache = loadImage('https://i.postimg.cc/XJkDyjGX/Mustache-img-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(600, 400);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nose x position = "+ results[0].pose.nose.x);
        console.log("nose y position = "+ results[0].pose.nose.y);
    }
}
function modelLoaded() {
    console.log("There are no errors.");
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache,nosex-26.5,nosey, 50,30);
}
function picture() {
    save('moustacheface.png');
}