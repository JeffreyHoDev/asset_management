import { createContext, useState } from "react";

export const RequestItemsContext = createContext({
    cartItems: [],
    showRequestItem: false,
    toogleShowRequestItemComponent: () => {},
    addCartItem: {}

})

export const addItemToCart = (cartItems, item) => {
    let newCartItems = []
    const existItem = cartItems.find(cartItem => cartItem.name === item.name)
    if(existItem) {
        return cartItems.map(cartItem => {
            if(cartItem.name === item.name) {
                cartItem.request_quantity = item.request_quantity
                return cartItem
            }
        })
    }
    else {
        newCartItems = cartItems.concat(item)
        return newCartItems
    }
}

export const removeItemFromCart = (cartItems, item) => {
    return cartItems.filter(cartItem => {
        return cartItem.name !== item.name
    })
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

    const removeItemFromCartsHandler = (itemToBeRemoved) => {
        
        setCartItems(removeItemFromCart(cartItems, itemToBeRemoved))
    }

    const value = { cartItems, addItemToCartHandler, toogleHandler,addCartItem, showRequestItem, passItemToRequestItemComponent, removeItemFromCartsHandler }

    return (
        <RequestItemsContext.Provider value={value}>{children}</RequestItemsContext.Provider>
    )
}