import React from "react";
import "../../styles/Cart.scss";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { CartItems,subtotal,tax,shipping,total} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addtoCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    toast.success("Item deleted successfully");
    dispatch({
      type: "delete",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <div className="cart">
      <main>
        {CartItems.length > 0 ? (
          CartItems.map((i) => (
            <CartItem
              imgScr={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal:${subtotal}</h2>
        <h2>Shipping:${shipping}</h2>
        <h2>Tax:${tax}</h2>
        <h2 className="total">Total:${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgScr,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgScr} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
