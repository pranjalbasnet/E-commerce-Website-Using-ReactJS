import React,{useState,useEffect} from 'react';
import "./ReviewProducts.css"
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {db} from "./firebase";

function ReviewProducts({id, image, title, price}) {
    const history = useHistory();
    var responses = [];
    const [customerReview, setCustomerReview] = useState('');
    const [{review, user}, dispatch] = useStateValue();
    const [reviews, setReviews] = useState([]);
    const val = '' + id;

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price
          },
        });
        history.push('/')
      };

    const getreviews = () => {
        document.getElementById("getReview").style.display = "none"; 
        var responses = document.getElementById("responses");
        console.log("The length is ", reviews.length)
        for (var i = 0; i < reviews.length; i++) {
            var temp = document.createElement("temp")
            temp.innerHTML = reviews[i].data.email + ": " + reviews[i].data.response + '<br>';
            responses.appendChild(temp);
        } 
    }

    useEffect(() => {
        db
        .collection("reviews")
        .doc(val)
        .collection("emails")
        .onSnapshot(snapShot => (
            setReviews(snapShot.docs.map(doc => ({
                data: doc.data()
            })))
        ))
    }, [user])

    const handleSubmit = e => {

        const val = '' + id;
        db.collection("reviews")
        .doc(val)
        .collection("emails")
        .doc(user?.email)
        .set({      
                productId: val,
                email: user?.email,
                response: customerReview
            })
        history.push('/')
    }

    return (
        <div>
            <div className='reviewProduct'>
                <img className='reviewProduct_image'src={image} />
                <div className='reviewProduct_info'>
                    <p className='reviewProduct_title'>{title}</p>
                    <p className='reviewProduct_price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                </div> 
                <button className="addButtonFromReview" onClick={addToBasket}>Add to Basket</button>

            </div>

            <div className="responses" id="responses">
            </div>

            <div>
                <div id="getReview" className="getReviews">
                <button onClick={getreviews}>See Previous Reviews</button>
                </div>

            </div>

            <form>
                <div className="writeReview_Section">
                  <h2>Write a review for this product</h2>
                  <input type='text' value={customerReview} className="review_box" onChange={e => setCustomerReview(e.target.value)} />
                </div>
                <div className="submitReview_Button">
                    <button type="button" onClick={handleSubmit}>Submit Review</button>
                </div>
            </form>
           
        </div>
    )
}

export default ReviewProducts
