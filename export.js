import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getDatabase, ref, child, set, onValue } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyADvq7-MBaEJOWYc4dLeOCluu0tbu6gwLU",
  authDomain: "fire-9-nnn7.firebaseapp.com",
  databaseURL: "https://fire-9-nnn7-default-rtdb.firebaseio.com",
  projectId: "fire-9-nnn7",
  storageBucket: "fire-9-nnn7.appspot.com",
  messagingSenderId: "248676788844",
  appId: "1:248676788844:web:a5368177d2939a107fc649"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {
  database, ref, child, set, onValue
}