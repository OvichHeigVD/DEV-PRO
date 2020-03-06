import React, { Component } from 'react';
import Menu from './layout/Menu'
import User from './layout/User'
import LoginForm from './layout/LoginForm'
import Home from './pages/Home'
import About from './pages/About'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      loginFormOpen : false,
      user : { email : '', password : '' }
    }

    this.toggleLoginForm  = this.toggleLoginForm.bind(this);
    this.userStateChange  = this.userStateChange.bind(this);
  }

  userStateChange(response){
    this.setState( { user: response.data, loginFormOpen : false });
  }

  toggleLoginForm(){
    // Sibling Component Communication...
    // LoginForm state must be managed in the first common ancestor of User and LoginForm
    // which is App. This allows to change the state between siblings. Here User calls toggleLoginForm
    // he receives as prop, toggleLoginForm change the state of App and re-render with the new state
    this.setState( { loginFormOpen : !this.state.loginFormOpen } );
  }

  render (){
    return (
      <Router>
        <section className="App">
          <section className="header">
            <Menu /> { /* Menu must be within Router */ }
            <User user = { this.state.user } userStateChange = { this.userStateChange } toggleLoginForm = { this.toggleLoginForm }  />
          </section>
          <section className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
            <LoginForm userStateChange = { this.userStateChange } isOpen = { this.state.loginFormOpen } />
          </section>
        </section>
      </Router>
    );
  }
}

export default App;
