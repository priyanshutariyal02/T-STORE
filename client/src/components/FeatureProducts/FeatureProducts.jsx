import React from "react";
import "./FeatureProducts.scss";
import Card from "../Card/Card.jsx";
const FeatureProducts = ({ type }) => {
  let data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      title: "Nike aiforce 1",
      isNew: true,
      oldPrice: 5000,
      price: 3500,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Nike aiforce 1",
      isNew: true,
      oldPrice: 5000,
      price: 3500,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1560906992-4b00de401b90?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Nike aiforce 1",
      oldPrice: 5000,
      price: 3500,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1585843736857-bd7438e55c67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Nike aiforce 1",
      oldPrice: 5000,
      price: 3500,
    },
  ];
  return (
    <div className="feature-products">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          necessitatibus vitae deserunt voluptatibus exercitationem dicta nulla
          ab fugiat? Atque, aliquam?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
