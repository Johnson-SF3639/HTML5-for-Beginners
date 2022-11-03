var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');
var widthAndHeight = 80;
var rotateDegree = 0;
var x = 0;
var y = 0;
var space = 20 + widthAndHeight;
var text = {
    x: x + (space) * (2 + 0.9),
    y: y + (space) * (2 + 0.8),
    size : 270
}
var textIcon = {
    x:  text.x+500,
    y:  text.y-120,
    size : 50,
    textSize : 35
}
var bottomText = {
    x: x + (space) * 0,
    y: y + (space) * (1.3),
    size : 45
}
var bottomTextIcon = {
    x:  bottomText.x+435,
    y:  bottomText.y-15,
    size : 15,
    textSize : 35
}
var textSpace = 500;
var logoTextSize = 270;
var opacity = 0.5;

c.fillStyle = '#fffdfb';

c.translate(canvas.width / 2 - 140, canvas.height / 2 - 140);

function draw() {
    c.fillRect(x + (space) * 0, y + (space) * 0, widthAndHeight, widthAndHeight);
    c.fillRect(x + (space) * 1, y + (space) * 0, widthAndHeight, widthAndHeight);
    c.fillRect(x + (space) * 2, y + (space) * 0, widthAndHeight, widthAndHeight);

    c.fillRect(x + (space) * 0, y + (space) * 1, widthAndHeight, widthAndHeight);
    c.fillRect(x + (space) * 1, y + (space) * 1, widthAndHeight, widthAndHeight);
    c.fillRect(x + (space) * 2, y + (space) * 1, widthAndHeight, widthAndHeight);

    c.fillRect(x + (space) * 0, y + (space) * 2, widthAndHeight, widthAndHeight);
    c.fillRect(x + (space) * 1, y + (space) * 2, widthAndHeight, widthAndHeight);
    c.fillRect(x + (space) * 2, y + (space) * 2, widthAndHeight, widthAndHeight);
}


function DiamondBox() {
    for (var i = 0; i < 100; i++) {
        c.save();
        c.translate((x + (space) * 2) + widthAndHeight, widthAndHeight);
        c.clearRect(1, 1, -100, -100);
        c.rotate(45 * Math.PI / 180);
        c.translate(-((x + (space) * 2) + widthAndHeight), -widthAndHeight);
        c.fillRect(x + (space) * 2, y + (space) * 0, widthAndHeight, widthAndHeight);
        c.restore();
    }
}

function textFunc(){
    c.save();
    c.globalAlpha = opacity;
    c.font = `${text.size}px Handel Gothic D`;
    c.fillText('Syncfusion', text.x, text.y, 500);
    c.font = `${textIcon.size}px Handel Gothic D`;
    c.fillText('®', textIcon.x, textIcon.y);
    c.restore();  

}
function SubText() {
    c.save();
    c.font = `${bottomTextIcon.textSize}px Segoe UI`;
    c.fillText('Deliver innovation with ease', bottomText.x, bottomText.y, 800);
    c.font = `${bottomTextIcon.size}px Handel Gothic D`;
    c.fillText('®', bottomTextIcon.x, bottomTextIcon.y);
    c.restore();
}

function update() {
    for (var i = 0; i < 90; i++) {
        setTimeout(() => {
            rotateDegree = 1;
            c.translate(150, 150);
            c.rotate(-rotateDegree * Math.PI / 180);
            c.translate(-150, -150);
            c.clearRect(-50, -50, canvas.width, canvas.height);
            draw();
        }, 10 * i)
    }

    c.translate(280, 0);
    c.rotate(90 * Math.PI / 180);

    draw();

    setTimeout(() => {
        DiamondBox();
    }, 1400);

    setTimeout(() => {
        textFunc();
    }, 1900);

    setTimeout(() => {
        reduceSize();
    }, 2500);

    setTimeout(() => {
        SubText();
    }, 3000);
}

function reduceSize() {
    for (let i = widthAndHeight; i > 15; i--) {
        widthAndHeight -= 0.9;
        space -= 1.1;
        text.x -= 3.2;
        text.y -= 3.1;
        textIcon.x -= 5.5;
        textIcon.y -= 1.7;
        textIcon.size -= 0.5;
        console.log(textIcon.size)
        text.size -= 3.1;
        opacity = 1;
        c.clearRect(-50, -50, canvas.width, canvas.height)
        draw();
        textFunc();
    }
}

update();

