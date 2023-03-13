import classes from "./ShopCard.module.css";
import icon from "../assets/shared/desktop/image-xx99-mark-one-headphones.png";

import { NavLink } from "react-router-dom";

const ShopCard = () => {
  return (
    <div className={classes.shopCard}>
      <div>
        <img src={icon} alt="" />
      </div>
      <div className={classes.cardText}>
      <h4>Headphones</h4>
      <NavLink className={classes.link}>Shop</NavLink>
      </div>

    </div>
  );
};

export default ShopCard;
