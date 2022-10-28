function DoFirst(){
    var button = document.getElementById('submitBtn');
    button.addEventListener("click", StoreData, false);
    Display();
}
function Store(name,address,phone,website,message){
    this.username = name;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.message = message;
}

function StoreData(){
    var username = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var website = document.getElementById('website').value;
    var message = document.getElementById('message').value;
    var data = new Store(username, address, phone, website, message);
    sessionStorage.setItem(username,JSON.stringify(data));
    Display();
    document.getElementById('name').value= "";
    document.getElementById('address').value= "";
    document.getElementById('phone').value= "";
    document.getElementById('website').value= "";
    document.getElementById('message').value= "";
}
function Display(){
    var show = document.getElementById('show');
    show.innerHTML="";
    if(sessionStorage.length>0){
        show.innerHTML +="<b>We have received:</b>";
    }
    for(var i=0; i<sessionStorage.length; i++){
        var keyValue = sessionStorage.key(i);
        var KeyData = JSON.parse(sessionStorage.getItem(keyValue));
        show.innerHTML += "<p>Name : "+KeyData.username+"<br/>Email Address : "+KeyData.address+"<br/>Phone : "+KeyData.phone+"<br/>Website : "+KeyData.website+"<br/>Message: "+KeyData.message;
    }
    if(sessionStorage.length>0){
        show.innerHTML +="<p>Thank you.</p>";
    }
}

window.addEventListener("load", DoFirst, false);