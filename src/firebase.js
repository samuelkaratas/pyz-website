import { initializeApp } from "firebase/app";


import { getFirestore, addDoc, collection } from "firebase/firestore";
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyArj58c85gaZPin9Sn5t32Ef4CXa66IaG0",
    authDomain: "pyz-web.firebaseapp.com",
    projectId: "pyz-web",
    storageBucket: "pyz-web.appspot.com",
    messagingSenderId: "740709873027",
    appId: "1:740709873027:web:e702b876abc66be3d7f2b6",
    measurementId: "G-6DEQMG3RPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export const joinWishlist = async (email) => {
    const docRef = await addDoc(collection(db, "wishlist"), {
        email
    });
    return docRef.id
}
