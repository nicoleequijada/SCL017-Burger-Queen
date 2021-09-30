import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";
import Data from "./menu.json";
import MenuOption from  "./MenuOption.jsx"
import Header from "./Header";


function Menu () {
    console.log(Data.Data)
    const MenuOptions = Data.Data.map((DataActual) => {
        return (
           <MenuOption data={DataActual}/>
        )

    })
    return(
        <>
        <Header show={true}/>
        <div className="body">
            
        <h1>Prueba de menu</h1>
        <div className="menu">
        {MenuOptions}
        </div>
        <Button  className="cliente" variant="warning">Nombre del cliente</Button>{' '}
        </div>
        </>
    )        
}
export default Menu