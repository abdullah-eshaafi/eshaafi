import TheNavigationBar from "../../../container/TheNavigationBar";
import TheJumbotron from "../../../container/TheJumbotron";
import TheCard from "../../../container/TheCard";
import TheSlider from "../../../container/TheSlider";
import GetApp from "../../../container/GetApp.js";
import Join_us from "../../../container/Join_us.js";
import Reviews from "../../../container/Review";
import Care from "../../../container/Care";
import Footer from "../../../container/Footer.js";
const Home = () => {
  return (
    <>
      <TheNavigationBar />

      <TheJumbotron />

      <TheCard />
      <TheSlider />
      <Join_us />
      <GetApp />
      <Reviews />
      <Care />
      <Footer />
    </>
  );
};

export default Home;
