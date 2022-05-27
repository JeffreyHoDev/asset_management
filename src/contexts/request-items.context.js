import { createContext, useState } from "react";

export const RequestItemsContext = createContext({
    cartItems: [],
    showRequestItem: false,
    toogleShowRequestItemComponent: () => {},
    addCartItem: {}

})

export const addItemToCart = (cartItems, item) => {
    let newCartItems = []
    newCartItems = cartItems.concat(item)
    return newCartItems
}


export const RequestItemsProvider = ({children}) => {

    const [showRequestItem, toogleShowRequestItemComponent] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [addCartItem, setAddCartItem] = useState({})

    const addItemToCartHandler = (item) => {
        setCartItems(addItemToCart(cartItems, item))
        toogleShowRequestItemComponent(!showRequestItem)
    }

    const passItemToRequestItemComponent = (item) => {
        setAddCartItem(item)
        toogleShowRequestItemComponent(!showRequestItem)
    }

    const toogleHandler = () => {
        toogleShowRequestItemComponent(!showRequestItem)
    }

    const value = { cartItems, addItemToCartHandler, toogleHandler,addCartItem, showRequestItem, passItemToRequestItemComponent }

    return (
        <RequestItemsContext.Provider value={value}>{children}</RequestItemsContext.Provider>
    )
}