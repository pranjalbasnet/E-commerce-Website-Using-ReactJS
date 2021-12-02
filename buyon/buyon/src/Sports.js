import React from "react";
import "./Sports.css";
import Product from "./Product";

function Sports() {
  return (
    <div className="sports">
      
      <div className="sports_container">

        <div className="sports_row">
          <Product
            id="61802c8afc13ae0fda00042e"
            title="Roger V21 Tennis Racket"
            price={12.99}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR106MnDOz8BDL8CK1bCbyvWHLHYpPN1VQNQpHxlJWbwP57l--tw9kzEebXF8AwUp3DQTZap8ak_dP3M0Sfze70kk86UrpwBnSnvaElgEfgozVx_ISZoSRt&usqp=CAE"
          />
          <Product
            id="61802c8afc13ae0fda00042f"
            title="Football: 2019 Champions League Edition"
            price={40.0}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThKa-Ctn1WiuuoBlAci3IxShTxY2IEbtFEdyHD3rRxS3zc5HsfS92CS3rQPuEJ9RxdWWSbsnFw498weZPXCnnfzI-GonienGGTU2xnTVDAlqkpNv7LG4gG&usqp=CAE"
          />
        </div>

        <div className="sports_row">
          <Product
            id="61802c8afc13ae0fda000430"
            title="Mercurial: Soccer Shoes|Special Edition"
            price={129.99}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS36-DZCn4rHJ7INvbAM2tIyBP2x2lF6JUcHVVYCmCyHhBKkX55e7bDmh3v4fxFU1xRy8xDmFHUm0U_KI0IutzbA7PfMO83aamREC2fznSrYmbpgdm0wCrY&usqp=CAE"
          />
        </div>
    </div>
    </div>
  );
}

export default Sports;