import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";

import ReviewProducts from "./ReviewProducts";

function Product({ id, title, image, price }) {
  const history = useHistory();
  var items = [];
  const [{ basket, review, user}, dispatch] = useStateValue();

  const addToReview = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'REMOVE_FROM_REVIEW',
      id: review.id,
    });
    dispatch({
      type: "ADD_TO_REVIEW",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        email: user?.email
      },
    });
    history.push('/review')
  };

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">

        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="" />
      <div>  
        <button className="addButton" onClick={addToBasket}>Add to Basket</button>
      </div>

      <div className="reviewButton">
        <button onClick={addToReview}>See Reviews</button>
      </div>
    </div>
  );
}

export default Product;