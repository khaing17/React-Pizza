import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQty, increaseItemQty } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button onClick={() => dispatch(decreaseItemQty(pizzaId))} type="round">
        -
      </Button>
      <p>{currentQuantity}</p>
      <Button onClick={() => dispatch(increaseItemQty(pizzaId))} type="round">
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
