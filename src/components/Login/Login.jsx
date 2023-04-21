import React from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const handleToAuth = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				const massage = error.code;
				console.log("error", massage);
			});
	};
	return (
		<div>
			<h1>This is login page</h1>
			<button onClick={handleToAuth}>Google Login</button>
		</div>
	);
};

export default Login;
