import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_row">
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

        <div className="home_row">
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

        <div className="home_row">
        <Product
            id="61805021fc13ae3fad0002b2"
            title="Cool Computer Science Tshirt: Pure Cotton"
            price={16.99}
            image="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X90Y85D1014916541S32/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=1237,crop=list/computer-science-programmer-mens-premium-t-shirt.jpg"
          />
          <Product
            id="61805021fc13ae3fad0002b3"
            title="Hoodies for winter|Unisex"
            price={15.99}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRg0tgM3fRqNJbY0aizSx-Gv_I-jP1OLjngzRa4ibl2ArXf23pOJBNjMBTgUOSjme1v34w0jn5yA6joSv_IlzU-9A2J3q6kMZgJK9ejZ3o&usqp=CAE"
          />
        </div>

        <div className="home_row">
        <Product
            id="61805021fc13ae3fad0002b8"
            title="Simple Dimpl Fidget"
            price={9.99}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRC4j-Ym7XKyJVbWAGW9deibK7jApkv6k5Vkil0IVuk8TgukCj-5gki4cz67qoyotm2OC15C43n7XA&usqp=CAc"
          />
          <Product
            id="61805021fc13ae3fad0002b9"
            title="Classic Building Blocks: 50 pieces"
            price={19.99}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlgMujwdcZ4a4uy2gqRKoe-LVQeM0CwhO2rkeN9TH7GX5wTKRA2fw6aL4RPiYZCiVSvo_yUoNsG-M&usqp=CAc"
          />
        </div>

        <div className="home_row">
          <Product
            id="61805021fc13ae3fad0002be"
            title="R29 Fitness Treadmill"
            price={1299.99}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmeZeRtj4WTrKYzew2YDPS83XbR0k7mKwhN3bo7iZJJ_jPpmIxZQLY8eCNTTCs9g1slDXPsqhPJg&usqp=CAc"
          />
          <Product
            id="61805021fc13ae3fad0002c1"
            title="100% Organic Protein Supplement for Adults"
            price={49.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Pa4ITE-JiPHU-7NryCuzA-BcQoutR40HlQ&usqp=CAU"
          />
        </div>

        <div className="home_row">
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
      </div>
    </div>
  );
}

export default Home;