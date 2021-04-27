import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { UserProvider } from './UserContext';

function App() {
  const [fname,setName] = useState("ramesh");

  const user = { fname,setName };

  return (
    <Router>
      <UserProvider value={user}>
        <div className="App">
          <Header authorName={fname} msg="Hi hello" />
          <Switch>
              <Route path="/" exact >
                <Login />
              </Route>
              <Route path="/home" exact >
                <h1>Home</h1>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
            </Switch>
        </div>
    </UserProvider>
    </Router>
  );
}

export default App;
