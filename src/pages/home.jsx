
import { Link } from "react-router-dom";

function Home () {
    return (
        <>
        <header className="header">
        <a href="https://imgur.com/Qv0BVg7"><img className="Logo" src="https://i.imgur.com/Qv0BVg7.png" title="source: imgur.com" /></a>
        </header>
        <body className="body">
        <Link className="btn btn-warning" role="button" to="/Menu"> {" "} Mesero </Link>
        <Link className="btn btn-warning" role="button" to="/Chef"> {" "} Cocina </Link>
        </body>
        </>
        )
    }
    
    export default Home;