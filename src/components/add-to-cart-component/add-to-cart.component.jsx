import './add-to-cart.styles.scss'
import { useContext, useState } from 'react'
import { RequestItemsContext } from '../../contexts/request-items.context'

const AddToCartComponent = () => {

    const { showRequestItem, toogleHandler, addItemToCartHandler, addCartItem } = useContext(RequestItemsContext)
    const [addedCartItem, setAddedCartItem] = useState(addCartItem)

    const requestQuantityHandler = (event) => {
        const cartItemToAdd = {...addCartItem, "request_quantity": event.target.value}
        setAddedCartItem(cartItemToAdd)
    }

    const addToCart = (event, item) => {
        event.preventDefault()
        addItemToCartHandler(item)
    }

    return (
        <>
        {
            showRequestItem ? (
                <>
                <div className='background'></div>
                <div className='add-to-cart-component-container'>
                    <div className='add-to-cart-component'>
                        <form className='add-to-cart-form'>
                            <span className='close-cross-icon' onClick={toogleHandler}>&#10539;</span>
                            <h2 className='add-to-cart-title'>Add New Asset</h2>
                            <div className='input-detail'>
                                <label htmlFor='item-name'>Item Name: </label>
                                <span name="item-name">Item A</span>
                            </div>
                            <div className='input-detail'>
                                <label htmlFor='item-name'>Reserved Quantity: </label>
                                <span name="item-name">10</span>
                            </div>
                            <div className='input-detail'>
                                <label htmlFor='request-quantity'>Request Quantity: </label>
                                <input type="number" name='request-quantity' onChange={requestQuantityHandler} required/>
                            </div>
                            <button type="button" onClick={(e) => addToCart(e, addedCartItem)}>Add to Cart</button>
                        </form>
                    </div>
                </div>
                </>
            ): null
        }

        </>
    )
}

export default AddToCartComponent