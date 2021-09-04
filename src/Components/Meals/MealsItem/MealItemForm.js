import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
export default function MealItemForm(props) {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitFormHandler = (e) => {
    e.preventDefault();
    const amountEntered = +amountRef.current.value.trim();

    if (amountEntered < 1 || amountEntered > 5) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    props.onAddToCart(amountEntered);
  };
  return (
    <div>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <Input
          ref={amountRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            key: "Amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        ></Input>

        <button>+Add</button>
        {!amountIsValid && <p>Plaese Enter the valid amount (1-5)</p>}
      </form>
    </div>
  );
}
