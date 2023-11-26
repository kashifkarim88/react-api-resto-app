import React, { useState } from 'react'
import '../components-css/Signup.css'
import { useNavigate } from 'react-router'

function Signup() {
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [contact,setContact] = useState("")
    const [password,setPassword] = useState("")
    const [city,setCity] = useState("")
    const [confirmPass,setConfirmPassword] = useState("")

    function createUser(){
        if(password !== confirmPass){
            alert("Password & Confirm Password doesn't match, Please re-enter the password")
        }
        else{
            fetch("https://resto-app-55zy.onrender.com/Users",{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "content-type":"application/json"
                },
                body: JSON.stringify({name,email,password,contact,city})
            }).then((responce)=>{
                responce.json().then(()=>{
                    setName("")
                    setCity("")
                    setEmail("")
                    setContact("")
                    setConfirmPassword("")
                    setPassword("")
                    navigate('/login')
                })
            })
        }
    }

  return (
    <div className='signup-wrapper'>
        <div className="signup-container">
            <h1>SIGNUP</h1>
            <input value={name} type="text" placeholder='username' onChange={(e)=> setName(e.target.value)}/>
            <input value={email} type="email" placeholder='email' onChange={(e)=> setEmail(e.target.value)}/>
            <input value={contact} type="text" placeholder='contact' onChange={(e)=> setContact(e.target.value)}/>
            <input value={password} type="password" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
            <input value={confirmPass} type="password" placeholder='confirm password' onChange={(e)=> setConfirmPassword(e.target.value)}/>
            <input value={city} type="text" placeholder='city' onChange={(e)=> setCity(e.target.value)} />
            <button onClick={()=> createUser()}>Signup</button>
        </div>
    </div>
  )
}

export default Signup