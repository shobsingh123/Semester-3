  var firebaseConfig = {
    apiKey: "AIzaSyDh5AJyaONIdw7ZtCUTFbv5xJlstO7752s",
    authDomain: "ruto-abd74.firebaseapp.com",
    databaseURL: "https://ruto-abd74.firebaseio.com",
    projectId: "ruto-abd74",
    storageBucket: "ruto-abd74.appspot.com",
    messagingSenderId: "824163817997",
    appId: "1:824163817997:web:0eb283d6899dcdb1d3d344",
    measurementId: "G-BNL9PM0JFF"
  };
  firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("Signed Up");
 }
function LogIn(){ 
var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("Logged In");
 }
  function signOut(){
   auth.signOut();
   alert("Signed Out");
  
  }