import React, { useContext, useState } from 'react';  
import UserContext from './UserContext';
import { useHistory } from "react-router-dom";
function Login(props){


   let history = useHistory();

    const user = useContext(UserContext);






    const [email,setEmail] = useState('ramesh@comorins.com');
    const [password,setPassword] = useState('goodluck');
   
    
   const login= () => {
      if(email === "ramesh@comorins.com" && password == "goodluck" ){
         user.setLogged(true);
         history.push('/home');

      }else{
         alert("error");
      }
   }


    return (
        <div className="main">
         <div className="col-md-4 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>Email</label>
                     <input type="text" className="form-control" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" defaultValue={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                  </div>
                  <button type="button" className="btn btn-black" onClick={()=>login()}>Login</button>
                  <button type="button" className="btn btn-secondary">Register</button>
               </form>
            </div>
         </div>
        </div> 
    );
}

export default Login;