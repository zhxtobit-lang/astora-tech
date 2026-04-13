function getUser(){
return localStorage.getItem("currentUser");
}

function isLogin(){
return !!getUser();
}

function logout(){
localStorage.removeItem("currentUser");
window.location.href="index.html";
}

function save(key,value){
localStorage.setItem(key,JSON.stringify(value));
}

function load(key){
return JSON.parse(localStorage.getItem(key) || "null");
}