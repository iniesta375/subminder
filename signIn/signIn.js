import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

 const firebaseConfig = {
    apiKey: "AIzaSyDBPPeJaDIpQ3l6MgGHcrAYgUXRvRmEJPU",
    authDomain: "subminder-trials.firebaseapp.com",
    databaseURL: "https://subminder-trials-default-rtdb.firebaseio.com",
    projectId: "subminder-trials",
    storageBucket: "subminder-trials.firebasestorage.app",
    messagingSenderId: "967844106132",
    appId: "1:967844106132:web:305b6a876595266a198981"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      if (user) {
        window.location.href = '../dashboard/dashboard.html';
      }
    })
    .catch((error) => {
      console.error("Google Sign-In Error:", error.code);
    });
};
window.signInGoogle = signInGoogle;

const signIn = (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email").value.trim();
  const passwordInput = document.getElementById("passWord").value;

  if (emailInput === "" || passwordInput === "") {
    alert('Please fill in all fields.');
    return;
  }

  signInWithEmailAndPassword(auth, emailInput, passwordInput)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in as:", user.displayName || user.email);
      
      setTimeout(() => {
        window.location.href = "../dashboard/dashboard.html";
      }, 1000);
    })
    .catch((error) => {
      const errorCode = error.code;
      
      if (errorCode === 'auth/invalid-credential' || errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
        alert("Invalid email or password. Please try again.");
      } else if (errorCode === 'auth/too-many-requests') {
        alert("Too many failed attempts. Please try again later.");
      } else {
        alert("Error: " + error.message);
      }
      console.log("Login Error Code:", errorCode);
    });
};
window.signIn = signIn;