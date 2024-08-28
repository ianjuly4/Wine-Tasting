import React, {useEffect, useState} from "react"
import Header from "./Header"
import Wine from "./Wine"
import Filter from "./Filter"


function WineList(){
  const [wines, setWines] = useState([])
  const [wineName, setWineName] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedPrice, setSelectedPrice] = useState("All")


   useEffect(() =>{
      fetch("wines",{
        method: "GET"
    })
    .then((r)=>r.json())
    .then((WineData)=>setWines(WineData))
    })

    const handleDelete = (clickedDelete) => {
      const updatedWines = wines.filter((wine)=>{
       return wine.id !== clickedDelete.id;
       setWines(updatedWines)
      })
    }
  
    const filteredwines = wines.filter((wine)=>{
      if(selectedPrice  === "All") return true;
      return wine.price === selectedPrice
    }).filter((wine)=>{
      if(selectedType === "All")return true;
      return wine.type === selectedType
    }).filter((wine)=>{
      return wine.name.toLowerCase().includes(wineName.toLowerCase())
    })

  return(
  <div className="WineList">
  <>
    <Header/>
   

    <ul>{filteredwines.map((wine)=>{
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
