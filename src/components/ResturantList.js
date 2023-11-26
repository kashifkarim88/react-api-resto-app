import React, { useEffect, useState } from "react";
import ResturantsListCard from "./ResturantsListCard";
import '../components-css/resturantList.css'

function ResturantList() {
  const [list, setList] = useState([]);
  const [remove, setRemove] = useState();

  function getRemoveCode(code) {
    setRemove(code);
  }

  function getData() {
    fetch('https://resto-app-55zy.onrender.com/resturants')  // Update this path to the correct location
      .then((response) => {
        response.json().then((results)=>{
          setList(results)
        })
      })
  }

  console.log(list)
  useEffect(() => {
    getData();
  }, [remove]);

  return (
    <div className="parent-wrapper">
      <h1 className="parent-heading">
        Restaurant List
      </h1>
      {list && list.length > 0 ? (
        <div className="card-div">
          {list && list.map((data) => (
            <ResturantsListCard
              key={data.id}
              id={data.id}
              name={data.name}
              location={data.location}
              contact={data.contact}
              rating={data.rating}
              description={data.description}
              getRemoveCode={getRemoveCode}
            />
          ))}
        </div>
      ) : (
        <p>Please wait, while we are checking the credentials.</p>
      )}
    </div>
  );
}

export default ResturantList;
