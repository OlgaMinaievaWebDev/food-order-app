import logoImg from '../../public/logo.jpg'
function Header() {
 return (
  <header id="main-header">
   <div id="title">
    <img src={logoImg} alt="logo image" />
    <h1>REACTFOOD</h1>
   </div>
   <nav>
    <button>Cart (0)</button>
  </nav>
 </header>
 )
}

export default Header
