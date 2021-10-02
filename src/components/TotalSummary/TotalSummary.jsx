import Button from "@restart/ui/esm/Button"

function TotalSummary (){
    return (
      <div className="d-grid gap-2 total">
      <Button className="total-summary" variant="primary" size="lg"><strong>TOTAL PEDIDO</strong></Button>
      </div>
    )
}

export default TotalSummary