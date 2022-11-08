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
    size : 270,
    width: 500
}
var rotateBox= {
    x: x + (space) * 2,
    y: y + (space) * 0,
    degree:0
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
var opacity = 0.01;

c.fillStyle = '#fffdfb';

c.translate(canvas.width / 2 - 140, canvas.height / 2 - 140);

function draw() {
    console.log("working : draw function");
    c.fillRect(x + (space) * 0, y + (space) * 0, widthAndHeight, widthAndHeight);
    c.fillRect(x + (space) * 1, y + (space) * 0, widthAndHeight, widthAndHeight);
    c.save()
    c.translate(rotateBox.x, rotateBox.y);
    c.rotate(rotateBox.degree * Math.PI / 180);
    c.translate(-rotateBox.x, -rotateBox.y);
    c.fillRect(rotateBox.x, rotateBox.y, widthAndHeight, widthAndHeight);
    c.restore()

    c.fillRect(x + (space) * 0, y + (space) * 1, widthAndHeight, widthAndHeight);
    c.fillRect(x + (space) * 1, y + (space) * 1, widthAndHeight, widthAndHeight);
    c.fillRect(x + (space) * 2, y + (space) * 1, widthAndHeight, widthAndHeight);

    c.fillRect(x + (space) * 0, y + (space) * 2, widthAndHeight, widthAndHeight);
    c.fillRect(x + (space) * 1, y + (space) * 2, widthAndHeight, widthAndHeight);
    c.fillRect(x + (space) * 2, y + (space) * 2, widthAndHeight, widthAndHeight);
}


function DiamondBox() {
    console.log("working : Diamond box");
    c.save();
    c.translate((x + (space) * 2) + widthAndHeight, widthAndHeight);
    c.clearRect(1, 1, -100, -100);
    c.rotate(45 * Math.PI / 180);
    c.translate(-((x + (space) * 2) + widthAndHeight), -widthAndHeight);
    c.fillRect(x + (space) * 2, y + (space) * 0, widthAndHeight, widthAndHeight);
    c.restore();
}

function textFunc(){
    console.log("working : text function");
    for(let i=300; i>text.x; i--){
        setTimeout(()=>{
            c.save();
            c.globalAlpha = opacity + 0.01;
            c.font = `${text.size}px Handel Gothic D`;
            c.fillText('Syncfusion', text.x, text.y, text.width);
            c.font = `${textIcon.size}px Handel Gothic D`;
            c.fillText('®', textIcon.x, textIcon.y);
            c.restore();
        },100)  
    }
}

function SubText() {
    word ='Deliver innovation with ease';
    console.log("working : subtext");
    for(let i=0; i < word.length; i++){
        setTimeout(() => {
            var uniqueSpace = 17;
            if(word[i]=='e' && word[i+1]=='l'){
                uniqueSpace = 22;
            }
            else if(word[i]=='e' && word[i+1]=='r'){
                uniqueSpace = 14.5;
            }
            else if(word[i]=='n' && word[i+1]=='n'){
                uniqueSpace = 14;
            }            
            else if(word[i]=='n' && word[i-1]=='o'){
                uniqueSpace = 14.7;
            }            
            else if(word[i]=='v'  && word[i+1]=='a'){
                uniqueSpace = 15.2;
            }
            else if(word[i]=='i'  && word[i+1]=='o'){
                uniqueSpace = 15;
            }
            else if(word[i]=='i'  && word[i+1]=='n'){
                uniqueSpace = 14.8;
            }
            else if(word[i]=='o'  && word[i+1]=='n'){
                uniqueSpace = 14.5;
            }
            else if(word[i]=='t'  && word[i+1]=='h'){
                uniqueSpace = 14.8;
            }
            else if(word[i]=='e'  && word[i+1]=='a'){
                uniqueSpace = 14.8;
            }
            else if(word[i]=='a'  && word[i+1]=='s'){
                uniqueSpace = 14.9;
            }
            else if(word[i]=='e'  && word[i-1]=='s'){
                uniqueSpace = 15;
            }
            else if(word[i]=='s'  && word[i+1]=='e'){
                uniqueSpace = 15;
            }
            else if(word[i]=='i'  && word[i+1]=='t'){
                uniqueSpace = 15.2;
            }
            else if(word[i]=='l'){
                uniqueSpace = 20;
            }
            else if(word[i]=='n'){
                uniqueSpace = 14.3;
            }
            else if(word[i]=='r'){
                uniqueSpace = 15.3;
            }
            else if(word[i]=='o'){
                uniqueSpace = 14.9;
            }
            else if(word[i]=='a'){
                uniqueSpace = 15.1;
            }
            else if(word[i]=='t'){
                uniqueSpace = 15.2;
            }
            else if(word[i]=='i'){
                uniqueSpace = 16;
            }
            else if( word[i]=='v'){
                uniqueSpace = 14;
            }
            else if(word[i]=='w'){
                uniqueSpace = 14.7;
            }
            else if(word[i]=='h'){
                uniqueSpace = 14.7;
            }
            else if(word[i]=='D'){
                uniqueSpace = 0;
            }
            else{
                uniqueSpace = uniqueSpace;
            }
            c.save();
            for(let j=0.1; j<1; j=j+0.02){
                setTimeout(()=>{
                    c.globalAlpha = j;
                    c.font = `${bottomTextIcon.textSize}px Segoe UI`;
                    c.fillText(`${word[i]}`, bottomText.x+(uniqueSpace*i), bottomText.y, 800);
                    c.font = `${bottomTextIcon.size}px Handel Gothic D`;
                },15)
            }
            if(i == word.length-1){
                c.fillText('®', bottomTextIcon.x, bottomTextIcon.y);
            }
            c.restore();
        }, 100*i);
    }
}

function update() {
    console.log("working : update function");
    for (var i = 0; i < 90; i++) {
        setTimeout(() => {
            rotateDegree = 1;
            c.translate(150, 150);
            c.rotate(-rotateDegree * Math.PI / 180);
            c.translate(-150, -150);
            c.clearRect(-150, -150, canvas.width, canvas.height);
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
    }, 2700);
}

function reduceSize() {
    console.log("working : reduce");
    for (let i = widthAndHeight; i > 15; i--) {
        setTimeout(()=>{ 
            widthAndHeight -= 0.9;
            space -= 1.1;
            text.x -= 3.2;
            text.y -= 3.1;
            text.width -= 2;
            textIcon.x -= 5.5;
            textIcon.y -= 1.7;
            textIcon.size -= 0.5;
            rotateBox.degree =45;
            rotateBox.x -=1.9;
            rotateBox.y -= 0.1;
            text.size -= 3.1;
            opacity += 0.0001;
            c.clearRect(-50, -50, canvas.width, canvas.height)
            draw();
            textFunc();
        } , 2.5*i)
    }    
    setTimeout(() => {
        SubText();
    }, 200);
}

update();

