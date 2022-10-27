function DoFirst(){
    var editCanvas = document.getElementById('canvasId');
    canvasId = editCanvas.getContext('2d');
    canvasId.fillRect(10,10,100,200);
    canvasId.clearRect(20,20,80,180);
    canvasId.strokeRect(20,20,100,200);
}
window.addEventListener("load",DoFirst,false);