import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import ReviewProducts from "./ReviewProducts";
import Product from "./Product"
import CheckoutProduct from "./CheckoutProduct";
import SearchedItem from "./SearchedItem";

function Search({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const history = useHistory();
  const [searchedId, setSearchedId] = useState("");
  const [{search}, dispatch] = useStateValue();

  const checking = (id, title, price, image) => {
    dispatch({
        type: 'EMPTY_SEARCH'
    })
    dispatch({
        type: "ADD_TO_SEARCH",
        item: {
          id: id,
          title: title,
          price: price,
          image: image,
        },
      });
      history.push('/SearchedItem')
  }
 

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="search_inputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          className="search_box"
          onChange={handleFilter}
        />
        <span className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </span>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
                    <button className="dataItem" onClick={() => {checking(value.id, value.title, 
                        value.price, value.image)}}> 
                        <p>{value.title}  ${value.price}</p>
                    </button>            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;