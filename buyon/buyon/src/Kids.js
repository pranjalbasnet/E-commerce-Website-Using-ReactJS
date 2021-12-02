import React from "react";
import "./Kids.css";
import Product from "./Product";

function Kids() {
  return (
    <div className="kids">
      
      <div className="kids_container">

        <div className="kids_row">
          <Product
            id="61805021fc13ae3fad0002b8"
            title="Simple Dimpl Fidget"
            price={9.99}
            rating={8}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRC4j-Ym7XKyJVbWAGW9deibK7jApkv6k5Vkil0IVuk8TgukCj-5gki4cz67qoyotm2OC15C43n7XA&usqp=CAc"
          />
          <Product
            id="61805021fc13ae3fad0002b9"
            title="Classic Building Blocks: 50 pieces"
            price={19.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlgMujwdcZ4a4uy2gqRKoe-LVQeM0CwhO2rkeN9TH7GX5wTKRA2fw6aL4RPiYZCiVSvo_yUoNsG-M&usqp=CAc"
          />
        </div>

        <div className="kids_row">
          <Product
            id="61805021fc13ae3fad0002bc"
            title="Water Pistol for Kids"
            price={9.99}
            rating={3}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEKAjJ10e3Xxp6VWYp7dV-8MNLPneELeTw5FwHq9I3c0VsrcZATdTueyNVQdVVXdCyEk_IQ5qNK9x-nafwhx_UD9nG3E19ZtGWGzZOplUtpf5giK9mGvYkmA&usqp=CAE"
          />
        </div>
    </div>
    </div>
  );
}

export default Kids;