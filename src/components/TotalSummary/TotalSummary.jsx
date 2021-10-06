import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OrderProduct from '../OrderProduct/OrderProduct';


function TotalSummary (props) {
  const {orderItems} = props

	const data = props.orderItems
  const SummaryOrderProduct = data.map((product, index) => {
		return (
			<OrderProduct product={product} key={index} index={index} removeOrderProduct={props.removeOrderProduct}/>
		)

	})

	const total = data.reduce((acumulator, element)=>{
		return acumulator + element.price

	}, 0)
  
    return (
      <Container>
        <div className="d-grid gap-2 total">
      <Button className="total-summary" variant="primary" size="lg"><strong>TOTAL PEDIDO</strong></Button>
      </div>
      {SummaryOrderProduct}
		  <Row>
		    <Col xs={12}><Button className="total-summary" variant="primary" size="lg">Total a pagar: {total}</Button></Col>
		  </Row>
		</Container>

      
    )
    
}

export default TotalSummary