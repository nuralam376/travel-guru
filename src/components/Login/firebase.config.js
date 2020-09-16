// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBF8go2P-4CDzZdJ44quUOmLGWNK41hfKg",
	authDomain: "travel-guru-d3e3d.firebaseapp.com",
	databaseURL: "https://travel-guru-d3e3d.firebaseio.com",
	projectId: "travel-guru-d3e3d",
	storageBucket: "travel-guru-d3e3d.appspot.com",
	messagingSenderId: "686903126848",
	appId: "1:686903126848:web:ddbee66c4af777d741e8a5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
