function DoFirst(){
    var editCanvas = document.getElementById('canvasId');
    canvasId = editCanvas.getContext('2d');
    canvasId.fillStyle="blue";
    canvasId.strokeStyle="green";
    canvasId.strokeRect(130,10,100,100);
    canvasId.fillRect(130,120,100,100);
    canvasId.clearRect(140,130,45,65);

    var gradient = canvasId.createLinearGradient(10,10,100,100);
    gradient.addColorStop(.0,"orange");
    gradient.addColorStop(0.5,"yellow");
    gradient.addColorStop(1,"orange");
    canvasId.fillStyle = gradient;
    canvasId.fillRect(10,10,100,100);
}
window.addEventListener("load",DoFirst,false);