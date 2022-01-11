const firebaseConfig = {
    apiKey: "AIzaSyAGQkkr_ddVXV1z-OF4sGlpF8LPJFQKlko",
    authDomain: "kwitter-4358d.firebaseapp.com",
    databaseURL: "https://kwitter-4358d-default-rtdb.firebaseio.com",
    projectId: "kwitter-4358d",
    storageBucket: "kwitter-4358d.appspot.com",
    messagingSenderId: "964579116390",
    appId: "1:964579116390:web:96cd9ec18ffe39213f34a7"
  };

  function addUser()
  {
      user_name = document.getElementById ("user_name").value;
      firebase.database().ref("/").child(user_name).update({
    purpose : "adding user" 
  } );
}