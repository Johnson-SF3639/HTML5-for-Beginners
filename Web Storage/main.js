function DoFirst(){
    var button = document.getElementById("button");
    button.addEventListener("click", SaveData, false);
}
function SaveData(){
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    sessionStorage.setItem(one,two);
    Display(one);
}
function Display(one){
    var rightBox = document.getElementById("rightBox");
    var two= sessionStorage.getItem(one);
    rightBox.innerHTML = "Name of Variable : "+one +"</br> Value : "+two ;

}
window.addEventListener("load", DoFirst, false);