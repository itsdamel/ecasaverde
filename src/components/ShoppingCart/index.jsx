import { CartDiv, CartHeader, CloseButton, CartContent, CartFooter } from "./style"
import { CartCard } from "../CartCard";
import { useState, useEffect } from "react";

export default function ShoppingCart({cartItems, close, clean, remove}){
    let toRender = cartItems.map((item) => <CartCard remove={remove} key={item.id} product={item}/>)


    const [total, setTotal] = useState(0) //Couldn't make it a hook, have to use react context to share cartItems
    useEffect(()=>{
        setTotal(cartItems.reduce((total, item)=> total += item.price, 0))
    }, [cartItems])
        
  
    return(
        <CartDiv>
           <CartHeader>
               <h1>Carrinho de Compras</h1>
               <CloseButton onClick={close} src='assets/close-button.png'></CloseButton>
           </CartHeader>
           <CartContent>
                {cartItems.length == 0? <p>Seu carrinho está vazio.</p> : toRender}
           </CartContent>
           <CartFooter>
                <div className='totalDiv'>
                    <h3>Total:</h3>
                    <p>R${total},00</p>
                </div>
                <div className='buttonsDiv'>
                    <button onClick={clean}>Esvaziar carrinho</button>
                    <button>Comprar</button>
                </div>
           </CartFooter>
        </CartDiv>
    )
} 
