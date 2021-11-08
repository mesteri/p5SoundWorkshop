let mySong, amplitude;



function preload(){

    mySong = loadSound('assets/massiveAttackAngel.mp3');
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    mySong.play();
    amplitude = new p5.Amplitude();

}



function draw() {
    
    let level = amplitude.getLevel();
    let col = map (level, 0, 1, 0, 255);

    let x = map(mouseX, 0, width, 0, width);
    let y = map(mouseY, 0, height, 0, height);

    console.log(col);
    background(col,col*1.5,col*2);

    fill(col*2, col*2, col*3);
    ellipse(x-200, y, 10*col);
    fill(col*3, col*2, col*3);
    ellipse(x-200, y, 7*col);
    fill(col*3, col*3, col*3);
    ellipse(x-200, y, 3.5*col);
    
    fill(col*2, col*2, col*3);
    ellipse(x+200, y, 10*col);
    fill(col*3, col*2, col*3);
    ellipse(x+200, y, 7*col);
    fill(col*3, col*3, col*3);
    ellipse(x+200, y, 3.5*col);
    
    fill(col*2, col*2, col*3);
    ellipse(x, y-200, 10*col);
    fill(col*3, col*2, col*3);
    ellipse(x, y-200, 7*col);
    fill(col*3, col*3, col*3);
    ellipse(x, y-200, 3.5*col);
    
    fill(col*2, col*2, col*3);
    ellipse(x, y+200, 10*col);
    fill(col*3, col*2, col*3);
    ellipse(x, y+200, 7*col);
    fill(col*3, col*3, col*3);
    ellipse(x, y+200, 3.5*col);


    fill(col*2, col*2, col*3);
    ellipse(x, y, 10*col);
    fill(col*3, col*2, col*3);
    ellipse(x, y, 7*col);
    fill(col*3, col*3, col*3);
    ellipse(x, y, 3.5*col);
    
    
}