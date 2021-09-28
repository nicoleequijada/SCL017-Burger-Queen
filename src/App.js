import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home.jsx';
import Chef from './pages/chef.jsx';
import Menu from './pages/menu.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



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
  