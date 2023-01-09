// import react, {useState} from 'react';
// import Loginform from './Loginform';

//  function App(){
//   const userDetails={
//     email:"name@gmail.com",
//     password:"user1234"
//   }

//   const [user, setUser] = useState({email:"", password:""});
//   const [error, seterror] = useState("");

//   const Login = details => {
//     console.log(details);
    
//     if(details.email == userDetails.email && details.password == userDetails.password){
//       console.log("Logged in");
//       setUser({
//         email:details.email,
//         password:details.password
//       })
//     } 
//     else
//     {
//       console.log("Details doesn't match")
//     }

//   const Logout = () => {
//     setUser({ email:"", password:""})
   
//   }
  
//   return (
    
//     <h1 className="App">
//       {(user.email !== "")? (
//         <h2 className="welcome">
//           <h2>Welcome,<span>{user.email}</span></h2>
//           <button onClick={Logout}>Logout</button>
//           </h2>
//       ) : (
//       <Loginform Login={Login} error={error}/>
//       )}
//     </h1>
    
//   );
// }

// }
// export default App;

import React from 'react'
import data from "./components/Data"
import Header from './components/Header';
import Routes from './components/Routes';
// import { Routes, Route } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

const App = () => {
  const {ProductItems} = data;
  
  return (
    <div>
      <Routers>
        <Header/>
        <Routes/>
      </Routers>
    </div>
  )
}

export default App