import { useContext } from "react"
import Modal from "./UI/Modal"
import CartContext from "../store/CartContext"
import { currencyFormatter } from "../util/formatting"
import Input from "./UI/Input"
import Button from "./UI/Button"
import UserProgressContext from "../store/UserProgressContext"

function Checkout() {
 const cartCtx = useContext(CartContext)
 const userProgressCtz = useContext(UserProgressContext)
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.totalPrice,
    0
  );
 function handleCloseCheckout() {
  userProgressCtz.hideCheckout()
 }
 
 return (
  <Modal open={userProgressCtz.progress === 'checkout'} onClose={handleCloseCheckout}>
   <form >
    <h2>Checkout</h2>
    <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
    <Input label='Full Name' type='text' id='full-name' />
    <input label='Email Address' type='email' id='email' />
    <Input label='Street' type='text' id='street' />
    <div className="control-row">
     <Input label='Postal Code' type='text' id='postal-code' />
     <Input label='City' type='text' id='city' />
    </div>
    <p className="modal-actions">
     <Button type='button' textOnly onClick={ handleCloseCheckout}>Close</Button>
     <Button>Submit Order</Button>
    </p>
   </form>
  </Modal>
 )
}

export default Checkout
