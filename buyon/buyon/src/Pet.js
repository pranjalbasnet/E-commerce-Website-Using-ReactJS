import React from "react";
import "./Pet.css";
import Product from "./Product";

function Pet() {
  return (
    <div className="pet">
      
      <div className="pet_container">

        <div className="pet_row">
          <Product
            id="61805021fc13ae3fad0002c4"
            title="Luxury Dog/Cat Bed"
            price={35.99}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQprW0pYMN_jOC2jIiZSNsvIiC19t6do4-Manu3_33eNBi6DsDCBG9VuUazv_EN0u508AoLCFpLFcI&usqp=CAc"
          />
          <Product
            id="61805021fc13ae3fad0002c5"
            title="Retractable Dog Leash"
            price={6.99}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSpvnQffkqx892GkvaHUGedCmuyo6i5pUuIDU3w0I9G3lBF2CPh8uv-TOzst1Ds8StPAh08dn3Mmg&usqp=CAc"
          />
        </div>

        <div className="pet_row">
          <Product
            id="61805021fc13ae3fad0002c6"
            title="Litter Pan for Cats"
            price={16.99}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3af42Z-ShTUqXcXrhZ9k2lcTpAIsxL6PSLbCBxGhHMQuPo7HfTBMcC-QJjKWxW007bL3Q4vnhWl4KUg&usqp=CAc"
          />
        </div>
    </div>
    </div>
  );
}

export default Pet;