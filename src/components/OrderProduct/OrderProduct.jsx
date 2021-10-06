import react from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function OrderProduct (props) {
	const {product, index} = props

	return (
		<Row>
		  	<Card>
		  	  <Card.Header>{product.name}</Card.Header>
			  <Card.Body>	
			    <Card.Text>
			     {product.price}
			    </Card.Text>
			    <Button variant="primary" onClick={()=>{props.removeOrderProduct(index)}}>Delete</Button>
			  </Card.Body>
			</Card>
		</Row>
	)

}
export default OrderProduct