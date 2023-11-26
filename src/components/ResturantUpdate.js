import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import '../components-css/UpdateResturant.css'

function ResturantUpdate() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")
  const [rating, setRatings] = useState("")
  const params = useParams()
  const {id} = params

  useEffect(()=>{
    fetch(`https://resto-app-55zy.onrender.com/resturants/${id}`)
    .then((responce)=>{
      responce.json().then((results)=>{
        setName(results.name)
        setDescription(results.description)
        setLocation(results.location)
        setContact(results.contact)
        setRatings(results.rating)
      })
      .catch((errror)=>{
        alert(errror)
      })
    }).catch((e)=>{
      alert(e)
    })
  },[])


  function updateResturantInfo(){
    fetch(`https://resto-app-55zy.onrender.com/resturants/${id}`,{
      method:'PUT',
      headers:{
        'Accept':"application/json",
        "content-type":"application/json"
      },
      body: JSON.stringify({name,description,location,contact,rating})
    }).then((responce)=>{
      responce.json().then(()=>{
        alert("Resturant Updated")
        setName("")
        setContact("")
        setDescription("")
        setRatings("")
        setLocation("")
        navigate("/resturantList")
      }).catch((e)=>{alert(e)})
    })
  }

  return (
    <div className='update-wrapper'>
      <h1>Update Resturant</h1>
      <div className="update-form">
        <input value={name} type="text" placeholder='name'onChange={(e)=> setName(e.target.value)}/>
        <input value={description} type="text" placeholder='discription'onChange={(e)=> setDescription(e.target.value)}/>
        <input value={location} type="text" placeholder='address'onChange={(e)=> setLocation(e.target.value)}/>
        <input value={contact} type="text" placeholder='contact'onChange={(e)=> setContact(e.target.value)}/>
        <input value={rating} type="text" placeholder='ratings'onChange={(e)=> setRatings(e.target.value)}/>
        <button onClick={()=>updateResturantInfo()}>Update</button>
      </div>
    </div>
  )
}

export default ResturantUpdate