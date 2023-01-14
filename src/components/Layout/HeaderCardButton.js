import React, { useContext, useState, useEffect } from "react";

import classes from "./HeaderCardButton.module.css";

import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const [isBump, setIsBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const classValue = `${classes.button} ${isBump ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBump(true);
    const timer = setTimeout(() => setIsBump(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={classValue} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCardButton;
