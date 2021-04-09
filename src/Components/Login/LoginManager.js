import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLogin = ()=>{
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    } else {
        firebase.app();
    }    
}
export const handleGoogleSignIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            return signedInUser;
        })
        .catch(err => {
            console.log(err)
        })
}