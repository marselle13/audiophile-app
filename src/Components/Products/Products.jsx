import classes from "./Products.module.css";
import { useParams } from "react-router-dom";

const Products = () => {
  const { productName } = useParams();

  return (
    <section className={classes.productsLanding}>
      <h2>{productName}</h2>
    </section>
  );
};

export default Products;
