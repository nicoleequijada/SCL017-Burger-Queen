import {React, useState, useEffect} from "react";
import Header from "../components/Header";
import { ListGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {saveOrder, getOrders} from '../firestore'
import OrderProduct from "../components/OrderProduct/OrderProduct";

const Chef = () => {
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        getOrders().then((ordersDetails)=>{
            console.log(ordersDetails)
            setOrders(ordersDetails)

        })
    }, [])
   
       
    return(
        <>
        <Header show={true}/>
            <body className="body">
                
                   
                <ListGroup>
                {
                    orders.map((order, index)=>{
                        const a = order.products.map((product, position)=>{return( <p>{product.name}</p>) })
                        return( <div>
                        <ListGroup.Item key={index}>{order.products.id}</ListGroup.Item>
                            <ListGroup.Item>{a}</ListGroup.Item>
                         </div>)
                        
                    })
                }                
                </ListGroup>  
                <Button className="button-order" onClick={()=>{ setOrders([...orders, 1]) }}>Confirmar pedido</Button>
            </body>
        </>
    )
}

export default Chef