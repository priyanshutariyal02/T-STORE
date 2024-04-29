import React from "react";
import "./Footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Catogries</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQS</span>
          <span>Page</span>
          <span>Store</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            officiis quas magnam ratione inventore. Consequuntur cumque delectus
            accusamus rerum, tempora aperiam praesentium saepe tempore omnis
            aliquid accusantium minus, vitae inventore?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            recusandae laborum quibusdam doloribus! Ut hic ducimus, consectetur
            saepe dolorum nisi, officiis, vitae quae non commodi totam veritatis
            omnis corporis doloribus.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">T-STORE</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/Payment.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
