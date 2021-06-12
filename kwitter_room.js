var firebaseConfig = {
    apiKey: "AIzaSyAcH8mtCHJzPPDfbmwTVRHEQRdjE1pFjW0",
    authDomain: "kwitter-8384f.firebaseapp.com",
    databaseURL: "https://kwitter-8384f-default-rtdb.firebaseio.com",
    projectId: "kwitter-8384f",
    storageBucket: "kwitter-8384f.appspot.com",
    messagingSenderId: "474011487959",
    appId: "1:474011487959:web:371f323379655a3110ea92",
    measurementId: "G-0M7DBLENX8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem ("room_name",name);
  window.location="kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }