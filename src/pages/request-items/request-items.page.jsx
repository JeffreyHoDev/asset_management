import './request-items.styles.scss'
import ITEM_LIST from '../../custom-data/item-list'

import { useContext, useState } from 'react'
import { RequestItemsContext } from '../../contexts/request-items.context'
import AddToCartComponent from '../../components/add-to-cart-component/add-to-cart.component'
import CartItems from '../../components/cart-items/cart-items.component'

const RequestItemsPage = () => {

    const { cartItems, passItemToRequestItemComponent, removeItemFromCartsHandler } = useContext(RequestItemsContext)
    const [project, setProject] = useState("")

    const checkOutHandler = () => {
        if(cartItems.length === 0) {
            alert("You need to at least have one item in cart")

        }else {
            console.log("Submitted")
        }
    }

    return (
        <>
            <AddToCartComponent />
            <div className='request-items-page-container'>
                <div className='request-items-form'>
                    <h2>Items List</h2>
                    <div className='request-items-list'>
                        <div className='request-item-header'>
                            <span>Item Name</span>
                            <span>Stock Quantity</span>
                            <span>Action</span>
                        </div>
                    {
                        ITEM_LIST.map((item, idx) => (
                            <div className='request-item' key={idx}>
                                <span>{item.name}</span>
                                <span>{item.stock_quantity}</span>
                                <button onClick={() => passItemToRequestItemComponent(item)}>&#43;</button>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className='cart-items-container'>
                    <h2>Cart</h2>
                    <div className='cart-items-list'>
                        <div className='cart-header'>
                            <span>Item Name</span>
                            <span>Quantity</span>
                            <span>Action</span>
                        </div>
                        <CartItems cartItems={cartItems} removeItemFromCartsHandler={removeItemFromCartsHandler}/>

                    </div>
                    <div className='request-extra-info-container'>
                        <label htmlFor='project-codes'>Project: </label>
                        <select name="project-codes" className='project-code-select'>
                            <option value="abc-project">ABC Project</option>
                            <option value="ccb-project">CCB Project</option>
                        </select>
                        <label htmlFor='collection-date'>Collection Date: </label>
                        <input type="date"></input>
                    </div>
                    <button onClick={checkOutHandler}>Checkout</button>
                </div>
            </div>

        </>
    )
}

export default RequestItemsPage