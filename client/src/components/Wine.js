import React from "react"

function Wine({name, image, location, price, type, handleDelete, star_review}){
  
  const handleDeleteClick = () =>{
    fetch(`http://127.0.0.1:5000/wines`,{
      method: "DELETE"
  })
  .then((r)=>r.json())
  .then(()=>handleDelete("My bad, thought you really liked that one"))
  window.location.reload()
  }

return (
    <li className="Wine">
      <h3>{name}</h3>
      <h5>{location}</h5>
      <h5>Type: {type}</h5>
      <h5>Price: {price}</h5>
      <button className="Remove" 
      onClick={handleDeleteClick}>REMOVE</button>
    </li>
  );
}  
export default Wine