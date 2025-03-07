import { useContext } from "react"
import Modal from "./UI/Modal"
import { CartContext } from "../store/CartContext"
import { currencyFormatter } from "../util/formatting"
import Button from "./UI/Button"

function Cart() {
 const cartCtx = useContext(CartContext)
 const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.totalPrice, 0)
 
 return (
   <Modal className="cart">
     <h2>Your Cart</h2>
     <ul>
       {cartCtx.items.map((item) => (
         <li key={item.id}>
           {item.name} - {item.quantity}
         </li>
       ))}
     </ul>
     <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
     <p className="modal-action">
       <Button textOnly>Close</Button>
       <Button>Go to Checkout</Button>
     </p>
   </Modal>
 );
}

export default Cart
