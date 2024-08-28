import React, {useEffect, useState} from "react"
import Header from "./Header"
import Wine from "./Wine"
import Filter from "./Filter"


function WineList(){
  const [wines, setWines] = useState([])

   useEffect(() =>{
      fetch("http://127.0.0.1:5000/wines",{
        method: "GET"
    })
    .then((r)=>r.json())
    .then((WineData)=>setWines(WineData))
    })
    const handleTypeChange = (e) => {
      setSelectedType(e.target.value)
    }
    const handlePriceChange = (e) => {
      setSelectedPrice(e.target.value)
    }
    const onSearchChange = (text) => {
      setRestaurantText(text)
    }
    const handleDelete = (clickedDelete) => {
      const updatedWines = wines.filter((wine)=>{
       return wine.id !== clickedDelete.id;
       setWines(updatedWines)
      })
    }
  
  return(
  <div className="WineList">
  <>
    <Header/>
    <Filter/>
    <ul>{wines.map((wine)=>{
      return <Wine key={wine.id}
      name={wine.name} 
      location={wine.location}
      type={wine.type}
      price={wine.price}
      star_review={wine.star_review}
      wine={wine}
      handleDelete={handleDelete}
      />
    })
    }</ul>
  </>
  </div>
  )
}
export default WineList
