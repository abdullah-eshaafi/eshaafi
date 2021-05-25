import TheNavBar from "../../../container/TheNavigationBar";
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
      <TheNavBar />

      <TheJumbotron />

      <TheCard />
      <TheSlider />

      <GetApp />
      <Join_us />
      <Reviews />
      <Care />
      <Footer />
    </>
  );
};

export default Home;
