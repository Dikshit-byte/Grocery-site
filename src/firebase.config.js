import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZzuzamP1YIWojpx9tlskvC7JgqLLYlZ0",
    authDomain: "restaurantapp-cc250.firebaseapp.com",
    databaseURL: "https://restaurantapp-cc250-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-cc250",
    storageBucket: "restaurantapp-cc250.appspot.com",
    messagingSenderId: "388903619247",
    appId: "1:388903619247:web:25dee3eb8dd6882db9625a"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };