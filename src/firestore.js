import { getFirestore } from "firebase/firestore";
import app from './firebaseConfig'
import { collection, addDoc } from "firebase/firestore";


const db = getFirestore(app);

async function saveData (data) {
    const docRef = await addDoc(collection(db, "pedidos"), data);
    console.log("Document written with ID: ", docRef.id);
}



export default saveData
