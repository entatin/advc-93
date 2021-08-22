// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBgE6YBmHl3TmnzJPV44OjKkMTLd9A1ttE",
  authDomain: "c-95-project.firebaseapp.com",
  databaseURL: "https://c-95-project-default-rtdb.firebaseio.com",
  projectId: "c-95-project",
  storageBucket: "c-95-project.appspot.com",
  messagingSenderId: "512265434057",
  appId: "1:512265434057:web:3e4ec92612fdd78a6eee18"
};
// Initialize Firebase

var UserName_1 = localStorage.getItem("User_1");
document.getElementById("UserName_Display").innerHTML = "Welcome " + UserName_1;
function rediectToRoomName(Names){
  console.log(Names);
  localStorage.setItem("Room_Name", Names);
  window.location = "Page.html";
}


  getData();

function LogOut(){
  localStorage.removeItem("User_1");
  localStorage.removeItem("Room_Name");
  window.location = "Login.html";
}