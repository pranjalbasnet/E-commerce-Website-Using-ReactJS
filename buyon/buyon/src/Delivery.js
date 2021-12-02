import React, {useState, useEffect} from 'react'
import './Delivery.css';
import { useStateValue } from "./StateProvider";
import { useHistory } from 'react-router-dom'

function Delivery() {
    const [{basket, user, delivery}, dispatch] = useStateValue();
    const history = useHistory();
    const [fullName, setFullName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    const addToDelivery = () =>
    {
        dispatch({
            type: "ADD_TO_DELIVERY",
            item: {
              name: fullName,
              nameAddress1: address1,
              nameAddress2: address2,
              CityName: city,
              stateName: state,
              zipCode: zipCode
            },
          });

          history.push('/payment');
    }

    return (
        <div className="delivery">
            <h2>Delivery Address</h2>
            <div className="delivery_container">
                <form>
                    <h5>Full Name</h5>
                    <input type='text' value={fullName} placeholder="Full Name" onChange={e => setFullName(e.target.value)} />

                    <h5>Address Line 1</h5>
                    <input type='text' value={address1} placeholder="Address 1" onChange={e => setAddress1(e.target.value)} />

                    <h5>Address Line 2</h5>
                    <input type='text' value={address2} placeholder="Address 2" onChange={e => setAddress2(e.target.value)} />

                    <h5>City</h5>
                    <input type='text' value={city} placeholder="City Name" onChange={e => setCity(e.target.value)} />

                    <h5>State</h5>
                    <input type='text' value={state} placeholder="State Name" onChange={e => setState(e.target.value)} />

                    <h5>Zip Code</h5>
                    <input type='number' minLength="5" value={zipCode} placeholder="5 Digit Zip Code" onChange={e => setZipCode(e.target.value)} />

                    <button onClick={addToDelivery} className="deliveryButton">Next</button>
                </form>
            </div>
        </div>
    )
}

export default Delivery
