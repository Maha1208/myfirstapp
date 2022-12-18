import React, { useState } from 'react'

 function Loginform({Login,error}) {

    const [details, setdetails]= useState({email:"", password:""});
  
    const submitHandler = e => {
        e.preventDefault();

       Login(details);

        
    }
  
    return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h1>Login</h1>

            <div className='form-group'>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" onChange={e => setdetails({...details, email:e.target.value})} value={details.email}/>
            </div>

            <div className='form-group'>
                <label htmlFor="password">Password:</label>
                <input type="password" name='pasword' id="password" onChange={e => setdetails({...details, password:e.target.value})} value={details.password}/>
            </div>
            
            
                <input type="submit" value='LOGIN'></input>
            </div>

        
    </form>
    
  )
}

export default Loginform;
