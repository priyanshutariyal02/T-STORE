import React, { useState } from "react";
import { useParams } from "react-router-dom";
import catImg from "../../image/glasses-category.jpeg"
import "./Products.scss";
import List from "../../components/List/List";
const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);
  return (
    <div className="products">
      <div className="left">
        <div className="filter-item">
          <h2>Product Categories</h2>
          <div className="input-item">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Sunglasses</label>
          </div>
          <div className="input-item">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Power Glasses</label>
          </div>
          <div className="input-item">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="2">Computer Glasses</label>
          </div>
        </div>
        <div className="filter-item">
          <h2>Filter by price</h2>
          <div className="input-item">
            <span>₹0</span>
            <input
              type="range"
              min={0}
              max={10000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>₹{maxPrice}</span>
          </div>
        </div>
        <div className="filter-item">
          <h2>Sort by</h2>
          <div className="input-item">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Low to high (price)</label>
          </div>
          <div className="input-item">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">High to low (price)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="cat-img"
          // src={catImg}
          src="https://images.unsplash.com/photo-1577410114274-ef015b5b6d29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
