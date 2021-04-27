import React, { useContext } from 'react';  
import UserContext from './UserContext';
function Login(props){
    const user = useContext(UserContext);

    user.setName("Guest");
    return (
        <div className="main">
         <div className="col-md-4 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name" />
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-black">Login</button>
                  <button type="submit" className="btn btn-secondary">Register</button>
               </form>
            </div>
         </div>
        </div> 
    );
}

export default Login;