import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home.jsx';
import Chef from '../../pages/Chef.jsx';
import Menu from '../../pages/Menu.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App/App.css'
import '../Header/header.css'
import '../MenuOption/menuOption.css'
import '../TotalSummary/totalSummary.css'
import '../MenuCliente/menuCliente.css'




function App() {
  return (
    <Router> 
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Menu" component={Menu} />
    <Route exact path="/Chef" component={Chef} />
    </Switch>
    </Router>
    
    );
  }
  
  export default App;
  