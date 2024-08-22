import React from "react"


function Filter({handleTypeChange, 
  handlePriceChange, 
  onSearchChange,

  search}){

  const handleChange = (e) => {
    onSearchChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearchChange(e.target.value)
  }

 
  
 
    return (
        <div className="Filter" onSubmit={handleSubmit} >
          <input type="text" 
          name="search"
          value={search} 
          onChange={handleChange}
          placeholder="Restaurant Name" />
    
          <select name="Filter" onChange={handleTypeChange}>
            
          </select>

          <select name="Filter" onChange={handlePriceChange}>
          
          </select>

        </div>
      );

}
export default Filter