import classes from "./ShopCard.module.css";

import { NavLink } from "react-router-dom";

const ShopCard = (props) => {
  return (
    <div className={classes.shopCard}>
      <div className={classes.cardImage}>
        <img src={props.image} alt="" />
        <div className={classes.shadow}>.fdsfsdaf</div>
      </div>
      <div className={classes.cardText}>
        <h4>{props.label}</h4>
        <NavLink className={classes.link}>Shop</NavLink>
      </div>
    </div>
  );
};

export default ShopCard;
