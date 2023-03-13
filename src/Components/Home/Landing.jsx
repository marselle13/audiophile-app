import classes from "./Landing.module.css";
import ladingPhoto from "../assets/shared/desktop/image-xx99-mark-two-headphones.png";
const Landing = () => {
  return (
    <section className={classes.landing}>
      <div>
        <div className={classes.landingText}>
          <label>New Product</label>
          <h2>XX99 Mark II Headphones</h2>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <button>See Product</button>
      </div>
      <div className={classes.landingPicture}>
        <img src={ladingPhoto} alt="" />
      </div>
    </section>
  );
};

export default Landing;
