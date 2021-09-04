import React, { useContext } from "react";
import CartContext from "../../../store/CartContext";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
export default function MealItem(props) {
  const price = `$ ${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const onAddCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      description: props.description,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} onAddToCart={onAddCartHandler}></MealItemForm>
    </li>
  );
}
