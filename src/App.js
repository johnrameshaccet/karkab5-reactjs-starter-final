import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Feed from './Feed';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { UserProvider } from './UserContext';
import { FeedProvider } from './FeedContext';

function App() {
  //user
  const [fname,setName] = useState("Guest");
  const [isLogged,setLogged] = useState(false);
  const user = { fname,setName ,isLogged,setLogged};

  //feed
  const [feedList,setFeedList] = useState( [ {id:1,msg:"Hi hello",user:12,image:'https://picsum.photos/200'},{id:2,msg:"Good morning",user:13,image:'https://picsum.photos/200'} ] );
  const feed = { feedList,setFeedList};

  return (
    <Router>
      <UserProvider value={user}> 
        <FeedProvider value={feed}>
        <div className="App">
          <Header authorName={fname} msg="Hi hello" />
          <Switch>
              <Route path="/login" exact >
                <Login />
              </Route>
              <Route path="/home" exact >
                <h1>Home</h1>
              </Route>
              <Route path="/feed" exact >
                <Feed />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
            </Switch>
        </div>
        </FeedProvider>
    </UserProvider>
    </Router>
  );
}

export default App;
