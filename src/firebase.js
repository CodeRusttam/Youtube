import firebase from '@firebase/app-compat';
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBHr0WQOjAbT66G1YTcew-LDpExk_vpOws",
  authDomain: "skilful-rig-363711.firebaseapp.com",
  projectId: "skilful-rig-363711",
  storageBucket: "skilful-rig-363711.appspot.com",
  messagingSenderId: "854035828835",
  appId: "1:854035828835:web:d67a18693e69c473772856",
  measurementId: "G-ZGWV86R0TD"
};
firebase.initializeApp(firebaseConfig)
export default firebase.auth()
