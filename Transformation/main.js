function DoFirst(){
    var editCanvas = document.getElementById('canvasId');
    canvasId = editCanvas.getContext('2d');

    canvasId.font ="bold 30px Tahoma";
    canvasId.textAlign = "start";
    canvasId.fillText("start", 10, 30);
    
    canvasId.translate(100, 150);
    canvasId.fillText("after the Translate", 0, 0);

    canvasId.rotate(1);
    canvasId.fillText("after the Rotate", 0, 0);

    canvasId.scale(1.2,2);
    canvasId.fillText("after the Scale", 0, 30);

    
    canvasId.translate(100, 150);
    canvasId.rotate(1);
    canvasId.fillText("after the Rotate", 0, 0);
}
window.addEventListener("load",DoFirst,false);