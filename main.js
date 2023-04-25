// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAA1jhmeWW3i5GTlISQhB6I6cYYh_oGHMs",
    authDomain: "doordarshan-authen.firebaseapp.com",
    projectId: "doordarshan-authen",
    storageBucket: "doordarshan-authen.appspot.com",
    messagingSenderId: "187367689514",
    appId: "1:187367689514:web:7081971ffc485781672253",
    measurementId: "G-21LP90HS4P"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            console.log(result);
            window.location.href = "dp.html";
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}
