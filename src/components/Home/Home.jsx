import React from "react";
import "../../styles/home.scss";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://lorenzomariotti.files.wordpress.com/2016/04/macbook-air-12-42.jpg?w=2000&h=1400&crop=1";

const img2 =
  "https://cdnc.lystit.com/photos/054c-2015/09/23/vince-black-dylan-oxford-shoe-product-2-146457989-normal.jpeg";

const Home = () => {
  const productList = [
    {
      name: "mac book",
      price: 12000,
      imgSrc: img1,
      id: "kjkdjkdjksjd",
    },
    {
      name: "black shoes",
      price: 490,
      imgSrc: img2,
      id: "kjkdjkdjfkfjfkjfkksjd",
    },
  ];
  const dispatch =useDispatch()

  const addtocartHandler = (options) => {
    toast.success('item add successfully')
    dispatch({type:'addtoCart',payload:options})
    dispatch({type:'calculatePrice'})
  };


  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addtocartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productcard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add To Cart
    </button>
  </div>
);

export default Home;
