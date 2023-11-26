import React, {useState } from "react";
import "../components-css/CreateResturant.css";

function ResturantCreate() {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")
  const [rating, setRatings] = useState("")



  function createResturant() {
  
    fetch('https://resto-app-55zy.onrender.com/resturants', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({ name, location, description, contact, rating }),
    }).then((responce)=>{
      responce.json().then((results)=>{
        console.log(results)
        alert(`${name} added successfully.`)
        setName("")
        setLocation("")
        setDescription("")
        setContact("")
        setRatings("")
      })
    })
  }
  
  return (
    <div className="creat-resturant-wrapper">
      <div className="form">
        <h1>Create Resturant</h1>
        <input value={name} type="text" placeholder="resturant name" onChange={(e)=>setName(e.target.value)}/>
        <input value={location} type="text" placeholder="address" onChange={(e)=>setLocation(e.target.value)}/>
        <input value={description} type="text" placeholder="description" onChange={(e)=> setDescription(e.target.value)}/>
        <input value={contact} type="text" placeholder="contact" onChange={(e)=>setContact(e.target.value)}/>
        <input value={rating} type="text" placeholder="ratings" onChange={(e)=> setRatings(e.target.value)}/>

        <button onClick={()=> createResturant()}>CREATE</button>
      </div>
    </div>
  );
}

export default ResturantCreate;
