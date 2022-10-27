function DoFirst(){
    var editCanvas = document.getElementById('canvasId');
    canvasId = editCanvas.getContext('2d');

    canvasId.shadowOffsetX= 4;
    canvasId.shadowOffsetY= 4;
    canvasId.shadowBlur= 4;
    canvasId.shadowColor= 'rgba(200,30,255,.5)';


    canvasId.font= "bold 50px timesnewroman";
    // canvasId.textAlign="end";
    canvasId.fillText("Hello John !",100,100);

}
window.addEventListener("load",DoFirst,false);