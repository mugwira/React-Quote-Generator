import Basket from "./Basket";
import Counter from "./Counter";
import Main from "./Main";
import ProductList from "./ProductList";
import QuoteGenerator from "./QuoteGenerator";
import ShoppingHeader from "./ShoppingHeader";
import Todo from "./Todo";
import './App.css'
import {userSchema} from './Validations/UserValidation'
import * as yup from 'yup'
import LoggedIn from "./LoggedIn";
import Nav from "./Nav";
import About from "./About"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <ProductList />
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
