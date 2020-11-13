import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCV240-m1gxlq20NfbRiae4i_9k-EIp0_U",
  authDomain: "shopcode-682a3.firebaseapp.com",
  databaseURL: "https://shopcode-682a3.firebaseio.com",
  projectId: "shopcode-682a3",
  storageBucket: "shopcode-682a3.appspot.com",
  messagingSenderId: "94056001396",
  appId: "1:94056001396:web:521bb01adbcd10fd7e8621",
  measurementId: "G-Y2PNZQEN2C",
});

export default app;
export const db = app.firestore();
export const storage = app.storage();
