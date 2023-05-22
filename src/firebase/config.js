// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCXw8rIHYKQvDsXaK8CCm2-7L5PamYbBXQ",
  authDomain: "iot-car-dashboard-b5e3a.firebaseapp.com",
  databaseURL: "https://iot-car-dashboard-b5e3a-default-rtdb.firebaseio.com",
  projectId: "iot-car-dashboard-b5e3a",
  storageBucket: "iot-car-dashboard-b5e3a.appspot.com",
  messagingSenderId: "1054281982521",
  appId: "1:1054281982521:web:4517f5ced10a5705fae3e8",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
