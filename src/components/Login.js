import React, { useState } from 'react'
import '../components-css/Login.css'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function userLogin(){
        fetch(`https://resto-app-55zy.onrender.com/Users?email=${email}&password=${password}`)
        .then((responce)=>{
          responce.json().then((results)=>{
            if(results.length !== 0){
              localStorage.setItem('login', JSON.stringify(results))
              navigate('/resturantList')
            }
            else{
              alert("Please, user email or password.")
            }
          })
        }).catch((e)=>{
          alert(e)
        })
    }
  return (
    <div className='parent-div-login'>
        <div className="child-div-login">
            <h1>Login</h1>

            <input value={email} type="email" placeholder='enter email' onChange={(e)=> setEmail(e.target.value)}/>
            <input value={password} type="password" placeholder='enter password' onChange={(e)=> setPassword(e.target.value)}/>

            <button on onClick={()=> userLogin()}>Login</button>

            <NavLink to={'/signup'} className='signup-link'>Don't have account | Signup</NavLink>
        </div>  
    </div>
  )
}

export default Login