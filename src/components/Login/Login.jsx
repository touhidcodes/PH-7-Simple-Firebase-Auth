import React, { useState } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
	const [user, setUser] = useState(null);

	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const handleToAuth = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const loggedInUser = result.user;
				console.log(loggedInUser);
				setUser(loggedInUser);
			})
			.catch((error) => {
				const massage = error.code;
				console.log(massage);
			});
	};

	const handleToSignOut = () => {
		signOut(auth)
			.then((result) => {
				setUser(null);
			})
			.catch((error) => {
				// An error happened.
				console.log(error.code);
			});
	};
	return (
		<div>
			<h1>This is login page</h1>
			{user ? (
				<button onClick={handleToSignOut}>Sign out</button>
			) : (
				<button onClick={handleToAuth}>Google Login</button>
			)}

			{user && (
				<div>
					<h2>User Name: {user.displayName}</h2>
					<p>Email: {user.email}</p>
					<img src={user.photoURL} alt='' />
				</div>
			)}
		</div>
	);
};

export default Login;
