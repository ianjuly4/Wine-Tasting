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
            <option value="All">Food Type</option>
            <option value="Spanish">Spanish</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
            <option value="Tai">Tai</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Indian">Indian</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Cocktails">Cocktails</option>
            <option value="Brunch">Brunch</option>
          </select>

          <select name="Filter" onChange={handlePriceChange}>
            <option value="All">Price</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>

        </div>
      );

}
export default Filter