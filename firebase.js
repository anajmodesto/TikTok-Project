
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCQTmvcZ271qzk9oCCfU4RHMKHj6rpx0N8",
  authDomain: "tiktok-clone-3e290.firebaseapp.com",
  projectId: "tiktok-clone-3e290",
  storageBucket: "tiktok-clone-3e290.appspot.com",
  messagingSenderId: "478775564245",
  appId: "1:478775564245:web:2bdb0b47d3e38ed8298f5c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;