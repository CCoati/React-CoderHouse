import cart from './assets/Carrito.svg'

const CartWidget = () => {
    return (
        <div className='carr'>  
            <img className='carrito' src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget