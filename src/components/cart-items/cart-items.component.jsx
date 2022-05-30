import './cart-items.styles.scss'

const CartItems = ({cartItems, removeItemFromCartsHandler}) => {

    return (
        <>
            {
                cartItems.length > 0 ? 
                (                            
                    cartItems.map((item, idx) => {
                        return (
                            <div className='cart-item' key={idx}>
                                <span>{item.name}</span>
                                <span>{item.request_quantity}</span>
                                <span className='remove-item-from-cart-icon' onClick={() => removeItemFromCartsHandler(item)}>&#10539;</span>
                            </div>
                        )
                    })                          
                ): <h3>No Items Added to Cart yet</h3>
            }

        </>
    )
}

export default CartItems