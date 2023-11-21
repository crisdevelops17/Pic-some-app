import React, {useContext, useState} from "react"
import { Context } from "../Context"
import CartItems from "../Components/CartItems"
function Cart () {
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const myNum = cartItems.length
    const cartItemElements = cartItems.map( img => (
        <CartItems key = {img.id} item = {img}/>
    ))
    function placeOrder () {
        setButtonText("...Placing order")
        setTimeout(() => {
            console.log("Order Placed")
            setButtonText("Place Order")
            emptyCart()
        },3000);


    }
    return (
    <main className="cart-page">
    <h1>Check Out</h1>
    {cartItemElements}
    <img />
    <h1>Total: {myNum * 5.99}</h1>
    <div className="order-button">
        <button onClick={placeOrder}>{buttonText}</button>
    </div>
    </main>
    )
}
export default Cart