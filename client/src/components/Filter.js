import React from "react"


function Filter({ 
  onSearchWineNameChange, 
  onSearchWineTypeChange,
  searchWineName,
  searchWineType
 }){

  const handleWineNameChange = (e) => {
    onSearchWineNameChange(e.target.value)
  }

  const handleWineTypeChange = (e) => {
    onSearchWineTypeChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearchWineTypeChange(e.target.value)
    onSearchWineNameChange(e.target.value)
  }

  
 
    return (
        <div className="Filter" onSubmit={handleSubmit} >
          <input type="text" 
          name="SearchWineName"
          value={searchWineName} 
          onChange={handleWineNameChange}
          placeholder="Wine Name"/>

          <input type="text" 
          name="SearchWineType"
          value={searchWineType} 
          onChange={handleWineTypeChange}
          placeholder="Wine Type" />
  
        </div>
      );

}
export default Filter