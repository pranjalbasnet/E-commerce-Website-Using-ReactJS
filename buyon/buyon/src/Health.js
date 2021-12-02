import React from "react";
import "./Health.css";
import Product from "./Product";

function Health() {
  return (
    <div className="health">
      <div className="health_container">
        <div className="health_row">
          <Product
            id="61805021fc13ae3fad0002be"
            title="R29 Fitness Treadmill"
            price={1299.99}
            rating={8}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmeZeRtj4WTrKYzew2YDPS83XbR0k7mKwhN3bo7iZJJ_jPpmIxZQLY8eCNTTCs9g1slDXPsqhPJg&usqp=CAc"
          />
          <Product
            id="61805021fc13ae3fad0002c1"
            title="100% Organic Protein Supplement for Adults"
            price={49.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Pa4ITE-JiPHU-7NryCuzA-BcQoutR40HlQ&usqp=CAU"
          />
        </div>

        <div className="health_row">
          <Product
            id="61805021fc13ae3fad0002c2"
            title="Routine Face Cleansing Set|100% Natural"
            price={29.99}
            rating={3}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSuOzJiye7W0zHRkwSx_tv84BSPWWReePpSMIEz8XH_GuLTvLDKoNeXoMl-fnxrNY1pSCNflFYIpHEqrcz7WOkhGdnjUZHSGmP_R5uf40PRtzloAm19KCTX_g&usqp=CAE"
          />
        </div>
    </div>
    </div>
  );
}

export default Health;