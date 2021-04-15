peter_pan="";
harry_potter="";
function preload(){
    peter_pan= loadSound('music.mp3');
    harry_potter= loadSound('music2.mp3');
}
function setup(){
    canvas=createCanvas(800,500);
    canvas.position(367.5,200);
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,800,500)
}