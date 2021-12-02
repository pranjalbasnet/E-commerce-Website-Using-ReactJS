import React, {useState} from "react";
import "./Header.css";
import Data from "./products.json"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import ProductsData from './products.json'
import Search from "./Search";

function Header() {
  const [{review, basket, user}, dispatch] = useStateValue();
  const [query, setQuery] = useState("");
  const history = useHistory();
  const handleAuthenticaton = () => {
    if (user) {
      auth?.signOut();
      history.push('/login')
    }
  }
   const trunketText = (text) => {
     return text?.length > 10 ? text.substring(0, 7) + '...' : text;
   }
  return (
    <div>
    <div className="header">
      <Link to="/">
        <img
          className="buyon_logo"
          src="https://media.istockphoto.com/vectors/a-trolley-shopping-cart-logo-icon-design-shop-symbol-vector-vector-id1168536689"
        />
      </Link>

      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="option_header">
            <span className="option_Type1">Hello {!user ? 'Guest' : trunketText(user?.email)}</span>
            <span className="option_Type2">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/about">
          <div className="option_header">
            <span className="option_Type2">About Us</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="option_header">
            <span className="option_Type2">Your Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="option_basket">
            <ShoppingBasketIcon />
            <span className="option_Type2 basket_count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
    <div className="criterias">
      <Link to='/sports'>
        <div className="option_header2">
          <span className="criterias_option">Sports</span>
        </div>
      </Link>

      <Link to='/technology'>
        <div className="option_header2">
          <span className="criterias_option">Technology</span>
        </div>
      </Link>

      <Link to='/clothing'>
        <div className="option_header2">
          <span className="criterias_option">Clothing</span>
        </div>
      </Link>

      <Link to='/kids'>
        <div className="option_header2">
          <span className="criterias_option">Kids</span>
        </div>
      </Link>

      <Link to='/health'>
        <div className="option_header2">
          <span className="criterias_option">Beauty and Health</span>
        </div>
      </Link>

      <Link to='/pet'>
        <div className="option_header2">
          <span className="criterias_option">Pet Supplies</span>
        </div>
      </Link>
    </div>
    <div className="header_search">
        <Search placeholder="Search products..." data={ProductsData} />
      </div>
    </div>
  );
}

export default Header;