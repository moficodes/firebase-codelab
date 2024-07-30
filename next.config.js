/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	}
};

module.exports = nextConfig;
/*
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1NbTeEDpPFpbNrUMzcEzpeYtwgQ4auUE",
  authDomain: "mofilabs-genai-02.firebaseapp.com",
  projectId: "mofilabs-genai-02",
  storageBucket: "mofilabs-genai-02.appspot.com",
  messagingSenderId: "28777015733",
  appId: "1:28777015733:web:b65f79cb4762606b3991fc",
  measurementId: "G-3WX175WWXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/