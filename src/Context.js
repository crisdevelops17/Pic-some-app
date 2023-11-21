import React, {useState, useEffect} from "react"


const Context = React.createContext()

function ContextProvider ({children}) {
 const [allPhotos, setAllPhotos] = useState([])
 const [cartItems, setCartItems] = useState([])    

 const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
 useEffect (() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setAllPhotos(data) )
 }, [])

 function toggleFavorite (id) {
   const myPhotosFav = allPhotos.map(item => {
    if(item.id === id) {
        return {...item, isFavorite: !item.isFavorite}
    }
        return item
   })
    setAllPhotos(myPhotosFav)
 }
 function addToCart(cartItem) {
    setCartItems(item => 
        [...item,cartItem])
    console.log(cartItems)
 }
 function removeFromCart(cartItem) {
    const removeItem = cartItems.filter(item => item.id !==cartItem)
    setCartItems(removeItem)
 }
 function emptyCart() {
    setCartItems([])
 }
    return (
        <Context.Provider value = {{
            allPhotos,
            toggleFavorite,
            addToCart,
            cartItems,
            removeFromCart,
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}