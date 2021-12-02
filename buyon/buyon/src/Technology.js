import React, {useEffect} from "react";
import "./Technology.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Technology() {

  const [{search, user}, dispatch] = useStateValue();
  
  return (
    <div className="technology">
      
      
      <div className="technology_container">

        <div className="technology_row">
          <Product
            id="61802c8afc13ae0fda000431"
            title="A56 Smartphone with Google"
            price={599.99}
            image="https://media.wired.com/photos/611ae3ef9561b7c69f0785ae/16:9/w_2399,h_1349,c_limit/Gear_Google-Pixel-5a-5G-SOURCE-Google(1).jpg"
          />
          <Product
            id="61805021fc13ae3fad0002af"
            title="Luminous 4SE Camera with 60mm lens"
            price={499.99}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTcPCi-L4m4iqZUSP84WZA0gnRzhUgDYeW5UtJfVIsMaF0btBrf0n8O84PgyLo99vycL55igEHP9QZezpOV-xdk7-9W05bN7PS-ldaVsjPHeFwOqK-gJvBk&usqp=CAE"
          />
        </div>

        <div className="technology_row">
          <Product
            id="61805021fc13ae3fad0002b0"
            title="60 inch HD 1080p LED TV"
            price={179.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOIOc1j3ri5QMmydxJGIGaTQWU2vTP9R8Ag&usqp=CAU"
          />
        </div>
        
    </div>
      
    </div>
  );
}

export default Technology;