import { useLocation } from "react-router-dom";
import Landing from "../Home/Landing";
import Header from "./Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const location = useLocation();

  return (
    <>
      <Header> {location.pathname === "/products" && <Landing />}</Header>
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
