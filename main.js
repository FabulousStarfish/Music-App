hp="";
frozen="";
disney="";
leftX=0;
leftY=0;
rightX=0;
rightY=0;
song1Score=0;
song1_status="";
song2Score=0;
song2_status="";
function preload(){
    disney= loadSound('Disney_music.mp3');
    frozen= loadSound('music2.mp3');
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

        song1Score=result[0].pose.keypoints[9].score;
        song2Score=result[0].pose.keypoints[10].score;
        leftX=result[0].pose.leftWrist.x;
        leftY=result[0].pose.leftWrist.y;
        rightX=result[0].pose.rightWrist.x;
        rightY=result[0].pose.rightWrist.y;
        // console.log("Left X - "+leftX);
        // console.log("Left Y - "+leftY);
        console.log("Left Wrist X - "+leftX , "\n", "Left Wrist Y - "+ leftY , "\n", "Right Wrist X - "+rightX,"\n","Right Wrist Y - "+leftY);
        console.log(song1Score);
    }
}
function draw(){
    image(video,0,0,800,500);
    fill('#1ceddf');
    stroke('#1ceddf');
    
    song1_status=frozen.isPlaying();
    if(song1Score > 0.02){
        circle(leftX,leftY,20);
        disney.stop();
        if(song1_status == false){
            frozen.play();
            document.getElementById("name").innerHTML="SONG - Frozen";
        }
    }
    fill('#b342f5');
    stroke('#b342f5');
    song2_status=disney.isPlaying();
    if(song2Score > 0.02){
        circle(rightX,rightY,20);
        frozen.stop();
        if(song1_status == true){
            disney.play();
            document.getElementById("name").innerHTML="SONG - Disney";
        }
    }
}