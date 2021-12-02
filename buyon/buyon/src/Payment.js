import React, {useState, useEffect} from 'react'
import './Payment.css'
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from "./StateProvider"
import { useHistory } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from "./reducer";
import axios from "./axios";
//import { db } from "./firebase"
import { db } from './firebase';

function Payment() {
    const [{basket, user, delivery}, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [fullName, setFullName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] =  useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] =  useState("");

    useEffect(() => {
        // generate special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a currencies subunit
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret) 
        }
        getClientSecret();
    }, [basket])

      
    const handleSubmit = async(event) => {
        // do the stripe stuff
        event.preventDefault();
        setProcessing(true);
        
        const payload =  await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent?.id)
            .set({
                    basket: basket,
                    delivery:delivery,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            })

            dispatch({
                type: 'EMPTY_DELIVERY'
            })

            history.replace('/orders');
        })
    }
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <div className="payment_section">
                    <div className="payment_title">
                        <h2>Items for Delivery</h2>
                    </div>
                    <div className="payment_items">   
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

                <div className="payment_section">
                  <div className="payment_title">
                      <h2>Payment Method</h2>
                  </div>
                  <div className="payment_details">
                      <form onSubmit={handleSubmit}>
                          <CardElement onChange={handleChange}/>
                          <div className="payment_priceContainer">
                              <CurrencyFormat
                                  renderText={(value) => (
                                      <h3>Order Total: {value}</h3>
                                  )} 
                                  decimalScale={2}
                                  value={getBasketTotal(basket)}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"$"}
                              />
                            <button disabled={processing || disabled ||
                            succeeded}>
                                <span>{processing ? <p>Processing</p> : 
                                "Buy Now"}
                                </span>
                            </button>
                          </div>
                          {error && <div>{error}</div>}
                      </form>        
                  </div>
                </div>    
            </div>
        </div>
    )
}

export default Payment
