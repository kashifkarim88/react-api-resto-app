import React from "react";
import { useNavigate } from "react-router-dom";
import "../components-css/restoList.css";


function ResturantsListCard(props) {
  const navigate = useNavigate();
  function deleteResto(id){
    fetch(`https://resto-app-55zy.onrender.com/resturants/${id}`,{
      method:"DELETE"
    }).then((responce)=>{
      responce.json().then(()=>{
        props.getRemoveCode(id)
      })
    })
  }
  return (
    <div className="resto-card">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>
        <b>Address :{props.location}</b>
      </p>
      <p>
        <b>Contact: {props.contact}</b>
      </p>
      <p style={{ color: "#ffa500" }}>
        Ratings : <b>{props.rating}</b>
      </p>

      <div className="buttons-div">
        <button onClick={()=> deleteResto(props.id)}>Remove</button>
        <button onClick={() => navigate("/updateResturant/"+props.id)}>Edit</button>
      </div>
    </div>
  );
}

export default ResturantsListCard;
