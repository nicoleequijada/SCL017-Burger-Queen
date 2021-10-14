import { getFirestore } from "firebase/firestore";
import app from './firebaseConfig'
import { collection, query, addDoc, getDocs } from "firebase/firestore";


const db = getFirestore(app);

async function saveOrder (orderDetail) {
    const docRef = await addDoc(collection(db, "pedidos"), orderDetail);
    console.log("Document written with ID: ", docRef.id);
}

async function getOrders () {
    const q = query(collection(db, "pedidos"));
    const querySnapshot = await getDocs(q);
    let orders = []
    querySnapshot.forEach((doc) => {
        orders.push(doc.data())
    });
    console.log(orders)
    return orders
}

export { saveOrder , getOrders }


