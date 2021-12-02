import React from "react";
import "./Clothing.css";
import Product from "./Product";

function Clothing() {
  return (
    <div className="clothing">
      
      <div className="clothing_container">

        <div className="clothing_row">
          <Product
            id="61805021fc13ae3fad0002b2"
            title="Cool Computer Science Tshirt: Pure Cotton"
            price={16.99}
            rating={8}
            image="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X90Y85D1014916541S32/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=1237,crop=list/computer-science-programmer-mens-premium-t-shirt.jpg"
          />
          <Product
            id="61805021fc13ae3fad0002b3"
            title="Hoodies for winter|Unisex"
            price={15.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRg0tgM3fRqNJbY0aizSx-Gv_I-jP1OLjngzRa4ibl2ArXf23pOJBNjMBTgUOSjme1v34w0jn5yA6joSv_IlzU-9A2J3q6kMZgJK9ejZ3o&usqp=CAE"
          />
        </div>

        <div className="clothing_row">
          <Product
            id="61805021fc13ae3fad0002b4"
            title="Fishing Hat|Camouflage"
            price={6.99}
            rating={3}
            image="https://imgprd19.hobbylobby.com/f/2a/8e/f2a8ea50008252c507b94aee811304fd406d0592/350Wx350H-555177-1118.jpg"
          />
        </div>
    </div>
    </div>
  );
}

export default Clothing;