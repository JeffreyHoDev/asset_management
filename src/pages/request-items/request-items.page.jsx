import './request-items.styles.scss'
import ITEM_LIST from '../../custom-data/item-list'

import { useContext, useState } from 'react'
import { RequestItemsContext } from '../../contexts/request-items.context'
import AddToCartComponent from '../../components/add-to-cart-component/add-to-cart.component'

const RequestItemsPage = () => {

    const { cartItems, passItemToRequestItemComponent } = useContext(RequestItemsContext)
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
                        {
                            cartItems.length > 0 ? 
                            (                            
                                cartItems.map((item, idx) => {
                                    return (
                                        <div className='cart-item' key={idx}>
                                            <span>{item.name}</span>
                                            <span>{item.request_quantity}</span>
                                            <span>&#10539;</span>
                                        </div>
                                    )
                                })                          
                            ): <h3>No Items Added to Cart yet</h3>
                        }

                    </div>
                    <div className='request-extra-info-container'>
                        <span>Project: </span>
                        <select className='project-code-select'>
                            <option value="abc-project">ABC Project</option>
                            <option value="ccb-project">CCB Project</option>
                        </select>

                    </div>
                    <button>Checkout</button>
                </div>
            </div>

        </>
    )
}

export default RequestItemsPage