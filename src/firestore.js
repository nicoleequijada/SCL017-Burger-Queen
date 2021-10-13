import { getFirestore } from "firebase/firestore";
import app from './firebaseConfig'
import { collection, addDoc } from "firebase/firestore";


const db = getFirestore(app);

async function saveOrder (OrderDetail) {
    const docRef = await addDoc(collection(db, "pedidos"), OrderDetail);
    console.log("Document written with ID: ", docRef.id);
}



export default saveOrder
