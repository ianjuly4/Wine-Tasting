import React, {useEffect, useState} from "react"
import Header from "./Header"
import Wine from "./Wine"


function WineList(){
  const [wines, setWines] = useState([])

  useEffect(()=>{
    fetch(`http://127.0.0.1:5000/wines`)
    .then((r)=>r.json())
    .then((WineData)=>setWines(WineData))
  },[])

  
  
    return(
    <div className="WineList">
    <> 
      <Header/>
      <Wine/>
    </>
    </div>
    )
}
export default WineList