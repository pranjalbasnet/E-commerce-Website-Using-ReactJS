import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Sports from "./Sports";
import Technology from "./Technology";
import Clothing from "./Clothing";
import Kids from "./Kids";
import Health from "./Health";
import Pet from "./Pet";
import Header from "./Header";
import Product from "./Product";
import Checkout from "./Checkout";
import Review from "./Review";
import Payment from "./Payment";
import About from "./About"
import Login from "./Login";
import Signup from "./Signup";
import Orders from "./Orders";
import Delivery from "./Delivery";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import SearchedItem from "./SearchedItem";

const promise = loadStripe("pk_test_51JntQYH7iYmORyYuVCQJumaMGRzq5WN6KHRcu5T3F4aJyN4hncYSiOeUDQ77LTLpEypFNwppvGRim9R05OfM89yQ00i6jYOYjI");
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {


    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user signs out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [])

  return (
    
    <Router>
      <div className="app"> 
        <Switch>
          <Route path="/review">
            <Header />
            <Review />
          </Route>

          <Route path="/delivery">
            <Header />
            <Delivery />
          </Route>
          
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/Payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>

          <Route path="/sports">
            <Header />
            <Sports />
          </Route>

          <Route path="/technology">
            <Header />
            <Technology />
          </Route>

          <Route path="/clothing">
            <Header />
            <Clothing />
          </Route>

          <Route path="/kids">
            <Header />
            <Kids />
          </Route>

          <Route path="/health">
            <Header />
            <Health />
          </Route>

          <Route path="/pet">
            <Header />
            <Pet />
          </Route>

          <Route path="/searchedItem">
            <Header />
            <SearchedItem />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Product />
          </Route>
        </Switch>
      </div>
  </Router>
  );
  }
export default App;