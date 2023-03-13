import classes from "./Header.module.css";
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";

import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.landingContainer}>
        <section className={classes.mainNavigation}>
          <nav className={classes.nav}>
            <div>
              <h1>
                <img src={logo} alt="logo" className={classes.logo} />
              </h1>
            </div>
            <ul>
              <li>
                <NavLink to="/products" className={classes.list}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/headphones" className={classes.list}>
                  Headphones
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/speakers" className={classes.list}>
                  Speakers
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/earphones" className={classes.list}>
                  Earphones
                </NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <img src={cart} alt="" />
          </div>
        </section>
        {props.children}
      </div>
    </header>
  );
};
export default Header;
