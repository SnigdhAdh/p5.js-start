function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    fill(14, 232, 119)
    stroke(203, 232, 14)
    circle(75,150,30,30)
    circle(150,150,30,30)
    fill(232, 14, 14)
    circle(112,175,40,40)

}

function save(){
    save('myImage.png');
}