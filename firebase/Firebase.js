

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: NEXT_APIKEY,
    authDomain: NEXT_AUTHDOMAIN,
    projectId: NEXT_PROJECTID,
    storageBucket: NEXT_STORAGEBUCKET,
    messagingSenderId: NEXT_SENDER_ID,
    appId: NEXT_APP_ID
  };
  
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password)=> {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch(error){
        console.log(error)
        alert(error.code.split('/')[1].split('-').join(" "))
    }


}

const login = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password)

    } catch (error) {
        console.log(error)
        alert(error.code.split('/')[1].split('-').join(" "))

    }
    
}

const logout = ()=> {
    signOut(auth)
}

export { auth, db, login, signup, logout}