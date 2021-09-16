
import Counter from "./Counter";
import ProductList from "./ProductList";
import QuoteGenerator from "./QuoteGenerator";
import Todo from "./Todo";
import './App.css'
import LoggedIn from "./LoggedIn";
import Nav from "./Nav";
import About from "./About"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./Login";
import Portifolio from "./Portifolio";
import StocksList from "./StocksList";
import './StocksData'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Portifolio />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/todo">
            <Todo />
          </Route>
          <Route exact path="/quotes">
            <QuoteGenerator />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/stocks">
            <StocksList />
          </Route>

        </Switch>
      
      </div>
     
    </Router>
  );
}

export default App;
