scorerightwrist =0;

scoreleftwrist =0;
rightwristX= 0;
rightwristY= 0;
leftwristX= 0;
leftwristY= 0;
music1 = "";
music2 = "";
music1_status ="";
music2_status ="";
function preload(){
music1 =loadSound("music.mp3")
music2 =loadSound("music2.mp3")
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotPoses)
}

function modelloaded(){
    console.log("modal has bean loaded")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
      scoreleftwrist =results[0].pose.keypoints[9].score;
      scorerightwrist =results[0].pose.keypoints[10].score;
    }
    }

function draw(){
    image(video,0,0,600,500)
   music1_status = music1.isPlaying()
    fill("#cb74b3")
    stroke("#cb74b3")




    if(scoreleftwrist > 0.2){
        circle(leftwristX, leftwristY, 20)
        music2.stop()
        if(music1_status==false){
            music1.play()
            document.getElementById("song").innerHTML = "Song playing is Song 1";
        }
}


music2_status = music2.isPlaying() 
if(scorerightwrist > 0.2){
    circle(rightwrisX, rightwristY, 20);
    music1.stop()
    if(music2_status==false){
        music2.play()
        document.getElementById("song").innerHTML = "Song playing is Song 2"
    }
}
}

