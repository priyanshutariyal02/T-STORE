import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Glass 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates est quisquam facilis sequi nesciunt fuga in illo, vero laboriosam, laudantium sint tempore minima quaerat rem nostrum, facere voluptatem! Adipisci, expedita!",
      isNew: true,
      oldPrice: 5000,
      price: 3500,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1556306535-38febf6782e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1566421966482-ad8076104d8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Glass 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates est quisquam facilis sequi nesciunt fuga in illo, vero laboriosam, laudantium sint tempore minima quaerat rem nostrum, facere voluptatem! Adipisci, expedita!",
      isNew: true,
      oldPrice: 5000,
      price: 3500,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ₹{item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹[price]</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
