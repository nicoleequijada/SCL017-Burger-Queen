import { Card } from "react-bootstrap"
import Button from "@restart/ui/esm/Button"
function MenuOption (props) {
    return (
        
        <div key={props.data.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.data.img} alt="coffe"/>
        <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>Precio {props.data.price}$</Card.Text>
        <Button variant="primary">Agregar</Button>
        </Card.Body>
        </Card>
        </div>
        )
    }
    export default MenuOption