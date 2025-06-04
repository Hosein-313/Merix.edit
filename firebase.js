
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2yuf356FYcRfSNTxcmrufNigjWRNPkjQ",
  authDomain: "merix-edit.firebaseapp.com",
  projectId: "merix-edit",
  storageBucket: "merix-edit.appspot.com",
  messagingSenderId: "53314644302",
  appId: "1:53314644302:web:70e3fea1f035828df9d61f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// نمونه استفاده برای نظرات
const commentRef1 = ref(db, 'comments/video1');
const commentRef2 = ref(db, 'comments/video2');
