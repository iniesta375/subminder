  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

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
  const auth = getAuth();
  
  onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
