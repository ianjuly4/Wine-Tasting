import React, {useState} from 'react'
import NavBar from "./NavBar"


function Form(){
    const [restaurant, setRestaurant] = useState("");
    const [address, setAddress] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault();
        const newRestaurant = {
            name: restaurant,
            address: address,
            type: type,
            price: price,
            imageUrl: image,
        }
        fetch("http://localhost:3000/Restaurants", {
            method: "POST",
            headers: {
                "content-type" : "application/Json",
            },
            body: JSON.stringify(newRestaurant)
        })
        .then((r)=>r.json())
        .then((newRestaurant)=>console.log(newRestaurant))
        setRestaurant("")
        setAddress("")
        setType("")
        setPrice("")
        setImage("")
    }
    return(
        <div>
            <form className="Form" onSubmit={handleSubmit} >
                <label>
                    <input 
                        type="text" 
                        name="Restaurant Name" 
                        placeholder="Restaurant Name" 
                        value={restaurant}
                        onChange={(e)=>setRestaurant(e.target.value)}
                    />
                </label>
                <label>
                <input 
                        type="text" 
                        name="Restaurant Image" 
                        placeholder="Restaurant Image" 
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="Restaurant Street Address"
                        placeholder='Restaurant Street Address' 
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                    />
                </label>
                <label>
                    <select 
                        name="type" 
                        value={type}
                        onChange={(e)=>setType(e.target.value)}
                        >
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
                </label>
                <label>
                    <select 
                        name="Price" 
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}>
                        <option value="All">Price</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                    </select>
                </label>
                <button type="submit">Add Restaurant</button>
            </form>
        </div>
    )
}
export default Form