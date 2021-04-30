import {
  Link
} from "react-router-dom";
import React, { useContext } from 'react';  
import UserContext from './UserContext';
import {useHistory} from 'react-router-dom';

function Header(props){

  const user = useContext(UserContext);
 
  const history = useHistory();
    //user.setName("Dhaya")
    //console.log("value",user);



    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Comorins by Ramesh</a>
            </div>
            {user.isLogged && 
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/feed">Feed</Link></li>
              </ul>
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search"></input>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
              
                <li><a onClick={()=> {user.setLogged(false); history.push('/login')} }>Logout</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div> }
            {!user.isLogged && <ul className="nav navbar-nav navbar-right"><li><Link to="/login">Login</Link></li></ul>}
          </div>
        </nav>
    );
}

export default Header;