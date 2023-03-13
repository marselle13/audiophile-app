import classes from "./MainCard.module.css";
import circle from "../../assets/shared/desktop/circle.svg";
import speaker from "../../assets/shared/desktop/image-zx9-speaker.png";

const MainCard = () => {
  return (
    <div className={classes.mainCard}>
      <div className={classes.mainImageDiv}>
        <img src={speaker} alt="" className={classes.speakerImage} />
      </div>
      <div className={classes.cardText}>
        <div>
          <h2>
            ZX9 <br /> SPEAKER
          </h2>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <button className={classes.productButton}>See Product</button>
      </div>
    </div>
  );
};

export default MainCard;
