import React, { useEffect, useState } from 'react';
import CartWrapper from '../styles/CartWrapper';
import Button from '../styles/Button'
function Cart(props) {
  const [show,setShow] = useState(false)
  const [transition,settransition] = useState(false)
  useEffect(_ => {
    if (props.show) {
      setTimeout(_ => {
        settransition(true)
      },5)
      setShow(true)
      return
    }
    settransition(false)
    setTimeout(() => {
      setShow(false)
    }, 200);
  },[props.show])

  return (
    <CartWrapper id='cart-container' isEmpty={props.count === 0} show={show} transition={transition}>
      <h2>Cart</h2>

      <div>
        {
          props.count === 0 ?
          "Your cart is empty." :
          <div className="cart">
            <div className="cart-info">
              <div>
                <img src="images/thumbnail-product-1.jpg" alt="product image" />
                <div>
                  <h3>The College Dropout...</h3>
                  <p>$4000.00 x {props.count} <span>${4000 * props.count}.00</span></p>
                </div>
              </div>
              <svg id='delete' onClick={props.resetCount} width="14" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" fill="#C3CAD9" fillRule="nonzero"/></svg>
            </div>
            <Button>Checkout</Button>
          </div>
        }
      </div>
    </CartWrapper>
  );
}

export default Cart;