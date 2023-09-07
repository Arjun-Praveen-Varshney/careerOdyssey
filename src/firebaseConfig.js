import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBeaaGInjybl4qURwC-y26VPnIprWYlpHw",
  authDomain: "resumeanalyzer-394008.firebaseapp.com",
  projectId: "resumeanalyzer-394008",
  storageBucket: "resumeanalyzer-394008.appspot.com",
  messagingSenderId: "709669872867",
  appId: "1:709669872867:web:54ca436958d2e698c991d6",
  measurementId: "G-K6VC4MY8XR",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
