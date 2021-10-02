import Button from "@restart/ui/esm/Button"

function Header (props) {
    const showBackButton = props.show;
    return(
        <div className="header">
            {showBackButton === true ? <Button variant="dark">Atras</Button>:''}
        
        <a href="https://imgur.com/nEDYQru"><img className="Logo" alt="logo" src="https://i.imgur.com/nEDYQru.png" title="source: imgur.com" /></a>
        </div>
    )
}
export default Header