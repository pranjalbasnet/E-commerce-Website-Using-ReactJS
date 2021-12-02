import React, { useState } from 'react'
import './Signup.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Signup() {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // it successfully created a new user with email and password
                userCredential.sendEmailVerification(); 
                auth.signOut();
                alert("Email sent");   
                if(auth)
                {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }   

    return (
        <div className="signup">
            <Link to='/'>
                <img
                    className="signup_logo"
                    src='https://media.istockphoto.com/vectors/a-trolley-shopping-cart-logo-icon-design-shop-symbol-vector-vector-id1168536689' 
                />
            </Link>

            <div className="signup_container">
                <h1>Sign up</h1>
                <form>
                    <h5>First Name</h5>
                    <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />

                    <h5>Last Name</h5>
                    <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={register} className='signup_registerButton'>Create your BUYON Account</button>
                </form>    
            </div>
        </div>
    )
}

export default Signup
