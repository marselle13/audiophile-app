import Grid from "../UI/Grid";
import ShopCard from "../UI/Cards/ShopCard";
import headphone from "../assets/shared/desktop/image-xx99-mark-one-headphones.png";
import speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import MainCard from "../UI/Cards/MainCard";

const Home = () => {
  const shopItems = [
    { label: "Headphones", image: headphone },
    { label: "Speakers", image: speaker },
    { label: "Earphones", image: earphone },
  ];

  return (
    <>
      <Grid>
        {shopItems.map((item, index) => (
          <ShopCard image={item.image} label={item.label} key={index} />
        ))}
      </Grid>
      <MainCard />
    </>
  );
};

export default Home;
