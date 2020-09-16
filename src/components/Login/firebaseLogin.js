// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import "./firebase.config";

export const firebaseProviderLogin = (providerName) => {
	let provider;

	if (providerName === "google") {
		provider = new firebase.auth.GoogleAuthProvider();
	} else if (providerName === "facebook") {
		provider = new firebase.auth.FacebookAuthProvider();
	}

	return firebase
		.auth()
		.signInWithPopup(provider)
		.then(function (result) {
			const { displayName, email } = result.user;

			const signedInUser = {
				name: displayName,
				email,
			};

			return signedInUser;
		})
		.catch(function (error) {
			return error.message;
		});
};

export const firebaseSignup = (email, password) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			const signUpMessage = {
				success: true,
				error: "",
			};
			return signUpMessage;
		})
		.catch(function (error) {
			const signUpMessage = {
				success: false,
				error: error.message,
			};
			return signUpMessage;
		});
};

export const firebaseUpdateUserName = (name) => {
	const user = firebase.auth().currentUser;

	return user
		.updateProfile({
			displayName: name,
		})
		.then(function () {
			return;
		})
		.catch(function (error) {
			// An error happened.
			return;
		});
};

export const firebaseCustomLogin = (email, password) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((result) => {
			const { displayName, email } = result.user;

			const signedInUser = {
				name: displayName,
				email,
			};

			return signedInUser;
		})
		.catch(function (error) {
			return error.message;
		});
};

export const firebaseLogout = () => {
	firebase
		.auth()
		.signOut()
		.then(function () {
			alert("Logged out successfully");
		})
		.catch(function (error) {
			alert(error.message);
		});
};
