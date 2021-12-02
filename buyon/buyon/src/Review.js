import React,{useState,useEffect} from 'react';
import {useStateValue} from "./StateProvider";
import ReviewProducts from "./ReviewProducts";
import { Link, useHistory } from "react-router-dom";
import { db } from './firebase';
import './Review.css'


function Review() {
    const history = useHistory();
    const [{review}, dispatch] = useStateValue();
    
    return (
        
        <div >
            <div className="review_title">
              <h1>Customer Reviews</h1>
            </div>

            {review.map(item => (
            <ReviewProducts
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              email={item.email}
            />
          ))}      
        </div>
    )
}

export default Review
