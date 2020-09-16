// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import "./firebase.config";

export const firebaseGoogleLogin = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider();

	return firebase
		.auth()
		.signInWithPopup(googleProvider)
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
