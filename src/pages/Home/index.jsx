import Menu from '../../components/Menu';
import Hero from './Hero/index.jsx';
import HowTo from './HowTo/index.jsx';
import Offers from './Offers/index.jsx';
import { HomePage, Main } from './style';
import ShoppingCart from '../../components/ShoppingCart/index.jsx'
//external libraries
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import cartContext  from '../../context/cartContext.jsx';

 
export default function Home(){
  const [cartItems, setCartItems] = useState([])
  const [cartVisibility, setCartVisibility]= useState(false)
  
  //Prob pass all this to shopping cart component
  const addToCart = (item) =>{
    if (!item.inShoppingCart){
      item.inShoppingCart = true;
      let newCart = [...cartItems, item]
      setCartItems(newCart)
  }
  item.quantityInCart += 1;
  toast.info(`${item.name} foi adicionada ao carrinho!`,{containerId: 'addToCart'})
  
  setCartVisibility(true)

  }

  const removeFromCart = (item) =>{
    item.inShoppingCart = false;
    item.quantityInCart = 0;
    let newCart = cartItems.filter((product) => product.id != item.id)
    setCartItems(newCart)
  }

  const displayCart = () =>{
    setCartVisibility(true)
  }

  const closeCart = () =>{
    setCartVisibility(false)
  }

  const cleanShoppingCart = () => {
    cartItems.forEach((item) => {
      item.inShoppingCart = false
      item.quantityInCart = 0;
    })
    setCartItems([])
  }
  return(
      <cartContext.Provider value={{cartItems, cleanShoppingCart, displayCart, closeCart, removeFromCart, addToCart }}>
        <HomePage >
            {cartVisibility&&<ShoppingCart />}
            <Main >
              <Menu />
              <Hero />
              <HowTo />
              <Offers />
            </Main>
        </HomePage>
      </cartContext.Provider>
      
  )
   
  
}