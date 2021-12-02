import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_one">

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="title_checkout">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}

        </div>
      </div>

      <div className="checkout_two">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;