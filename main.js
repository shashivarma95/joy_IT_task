function validation(){
var Name  = document.getElementById('name').value;
var mailId = document.getElementById('mail').value;

if(Name == ""){
    document.getElementById('firstname').innerHTML = "**please enter your name";
    return false;
}
if(mailId == ""){
    document.getElementById('mail-id').innerHTML = "**please enter a vaild email id";
    return false;
}

}


function mysubmit(){
    var Name  = document.getElementById('name').value;
    var mailId = document.getElementById('mail').value;

    validation();
    var user = new Map();
    user["userName"] =  Name;
    user["userId"] = mailId;
    var registerdUsers = window.localStorage.getItem("registerdUsers");
    if(registerdUsers ==null){
        registerdUsers = new Array();
      }else{
        registerdUsers = JSON.parse(registerdUsers);
      }
    //   if(registerdUsers[].userId === userId){
    //     alert("user id is already exists in the system");
    //     return;
    // }

      registerdUsers.push(user);
    
      window.localStorage.setItem("registerdUsers",JSON.stringify(registerdUsers));
      return;

}

function home(){
    document.getElementById("bckgrnd").style.display = "block";
    document.getElementById("brands").style.display = "block";
    document.getElementById("service").style.display = "none";
    document.getElementById("abt").style.display = "none";

}

function about(){
    document.getElementById("abt").style.display = "block";
    document.getElementById("bckgrnd").style.display = "none";
    document.getElementById("brands").style.display = "none";
    document.getElementById("service").style.display = "none";
    return true;
}

function servce(){
    document.getElementById("service").style.display = "block";
    document.getElementById("bckgrnd").style.display = "none";
    document.getElementById("brands").style.display = "none";
    document.getElementById("abt").style.display = "none";
    return true;
}


