// TODO: Add SDKs for Firebase products that you want to use: https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
	apiKey: "your-firebase-api-Key",
	authDomain: "your-firebase-auth-domain",
	projectId: "your-firebase-id",
	storageBucket: "your-firebase-storage-bucket",
	messagingSenderId: "your-firebase-sender-id",
	appId: "your-firebase-app-id"
};

const backend = {
	baseURL:"https://your.domain.com",
	signInEndpoint: "v0/whoami",
	signOutEndpoint: "v0/logout",
};

module.exports = {
	firebaseConfig,
	backend,
};
// vim: set sw=4 ts=4 indk= list noet:
