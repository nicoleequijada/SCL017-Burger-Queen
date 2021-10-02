import { Card } from "react-bootstrap"
import Button from "@restart/ui/esm/Button"
function MenuOption (props) {
    return (
        
        <div className="card-menu" key={props.data.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.data.img} alt="coffe"/>
        <Card.Body>
        <Card.Title className="card-title">{props.data.name}</Card.Title>
        <Card.Text className="card-price">Precio {props.data.price}$</Card.Text>
        <div className="d-grid gap-3">
        <Button className="button-add" variant="primary" size="lg">Agregar</Button>
        </div>
        </Card.Body>
        </Card>
        </div>
        )
    }
    export default MenuOption