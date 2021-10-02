
import { Link } from "react-router-dom";
import Header from "../components/Header";
import '../components/App/App.css' 

function Home () {
    return (
        <div>
            <Header show={false} />
            <div className="body">
                <div className="button-home">
                    <Link className="btn btn-warning" role="button" to="/Menu"> {" "} Mesero </Link>
                    <Link className="btn btn-warning" role="button" to="/Chef"> {" "} Cocina </Link>
                </div>
            </div>
        </div>
        )
    }
    
    export default Home;