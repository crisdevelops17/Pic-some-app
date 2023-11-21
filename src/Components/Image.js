import React, {useContext, useState} from "react"
import {Context} from "../Context"
function Image ({item,className}) {

    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    function heartIcon () {
        if(item.isFavorite === true) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(item.id)}></i>
        }
        else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(item.id)}></i>
        }
    }
    function cartIcon () {

        const myCartItems = cartItems.some(pic => pic.id === item.id)
        if(myCartItems) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(item.id)}></i>
        }
        else if (hovered)  {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(item)}></i>
            
        }
    }
return (
    <div className ={`${className} image-container`} 
    onMouseEnter = {() => setHovered(true)}
    onMouseLeave = {() => setHovered(false)}>
    <img src = {item.url}  className = "image-grid"/>
    {heartIcon()}
    {cartIcon()}
    
    </div>
)
}
export default Image