// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import {getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBON8X1QGe22oQeY-hqmvTACUQaOXqyX1E",
    authDomain: "sera-agtrace.firebaseapp.com",
    projectId: "sera-agtrace",
    storageBucket: "sera-agtrace.appspot.com",
    messagingSenderId: "807856824701",
    appId: "1:807856824701:web:e18fd298a26d88bb2bac14",
    measurementId: "G-C7X4VNSD6E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getDatabase(app);
  document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    
    set(ref(db, 'user/' + document.getElementById("username").value),
    {
        username:document.getElementById("username").value, 
        Email:document.getElementById("email").value 
        
    }
)
alert("Successfully Sent !")
  }
)