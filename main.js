peter_pan="";
harry_potter="";
leftX=0;
leftY=0;
rightX=0;
rightY=0;
function preload(){
    peter_pan= loadSound('music.mp3');
    harry_potter= loadSound('music2.mp3');
}
function setup(){
    canvas=createCanvas(800,500);
    canvas.position(367.5,200);
    video= createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modalLoaded);
    posenet.on('pose',gotResult);
}
function modalLoaded(){
    console.log("Modal is loaded");
}
function gotResult(result){
    if(result.length > 0){
        leftX=result[0].pose.leftWrist.x;
        leftY=result[0].pose.leftWrist.y;
        rightX=result[0].pose.rightWrist.x;
        rightY=result[0].pose.rightWrist.y;
        console.log("Left Wrist X - "+leftX , "\n", "Left Wrist Y - "+ leftY , "\n", "Right Wrist X - "+rightX,"\n","Right Wrist Y - "+leftY);
    }
}
function draw(){
    image(video,0,0,800,500)
}