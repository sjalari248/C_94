
const firebaseConfig = {
      apiKey: "AIzaSyB0mgkre0gEn5pLljU2Y-6wccB-Eytn3CU",
      authDomain: "kwitterapp-636c0.firebaseapp.com",
      databaseURL: "https://kwitterapp-636c0-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-636c0",
      storageBucket: "kwitterapp-636c0.appspot.com",
      messagingSenderId: "373605979350",
      appId: "1:373605979350:web:2afb4559a5b9857b7b6577",
      measurementId: "G-55YTZYVDPX"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
