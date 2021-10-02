import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";
import Data from '../utils/menu.json'
import MenuOption from '../components/MenuOption'
import Header from '../components/Header'
import TotalSummary from '../components/TotalSummary'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Menu () {
    console.log(Data.Data)
    const MenuOptions = Data.Data.map((DataActual) => {
        return (
            <MenuOption data={DataActual}/>
            )
            
        }
    )
    return(
        <>
        <Header show={true}/>
        <div className="body">
        <div>
        <Button  className="cliente" variant="warning">Nombre del cliente</Button>
        <input className="cliente-input" placeholder="nombre cliente"></input>
        </div>
        <div>
        <Button  className="cliente" variant="warning">Numero de mesa</Button>
        <input className="cliente-input" placeholder="numero de mesa"></input>
        </div>
        
        
        <div className="menu">
        
        <Row>
        <Col className="menu-col" sm={9}>
        {MenuOptions}
        </Col>
        
        <Col sm={3}>
        <TotalSummary />
        </Col>
        </Row>
        
        
        </div>
        </div>
        </>
        )        
    }
export default Menu