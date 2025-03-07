import { useContext } from 'react'
import logoImg from '../../public/logo.jpg'
import Button from './UI/Button'
import  CartContext  from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'

function Header() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  function handleShowCart() {
    userProgressCtx.showCart()
  } 

  const totalCartItems = cartCtx.items.reduce((total, item) => { return total + item.quantity }, 0)
  
  
 return (
   <header id="main-header">
     <div id="title">
       <img src={logoImg} alt="logo image" />
       <h1>ReactFood</h1>
     </div>
     <nav>
       <Button textOnly onClick={handleShowCart}>
         Cart ({totalCartItems})
       </Button>
     </nav>
   </header>
 );
}

export default Header
