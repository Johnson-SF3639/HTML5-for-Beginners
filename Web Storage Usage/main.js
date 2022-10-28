function DoFirst() {
    var button = document.getElementById("button");
    button.addEventListener("click", SaveData, false);
    Display();
} 

function SaveData() {
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    sessionStorage.setItem(one, two);
    Display();
    document.getElementById('one').value = "";
    document.getElementById('two').value = "";
}

function Display() {
    var rightBox = document.getElementById("rightBox");
    rightBox.innerHTML = "";
    for (var i = 0; i < sessionStorage.length; i++) {
        var keyValue = sessionStorage.key(i);
        var Value = sessionStorage.getItem(keyValue);
        rightBox.innerHTML += "Name of Key : " + keyValue + "</br>Name of Value : " + Value + "</br>";
    }
}
window.addEventListener("load", DoFirst, false);