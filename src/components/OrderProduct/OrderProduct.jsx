import react from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap'
import '../OrderProduct/orderProduct.css'

function OrderProduct (props) {
	const {product, index} = props

	return (
		<Row>
			<Card className="card-order">
 				<ListGroup variant="flush">
    				<ListGroup.Item>{product.name} ${product.price} </ListGroup.Item>
				<Button className="button-delete" variant="danger" onClick={()=>{props.removeOrderProduct(index)}}>Delete</Button>
  				</ListGroup>
			</Card>
		  	
		</Row>
	)

}
export default OrderProduct