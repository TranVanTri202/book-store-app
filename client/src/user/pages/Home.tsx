import Banner from "../components/Banner/Banner";
import Blog from "../components/Blog/Blog";
import ContactBottom from "../components/Footer/ContactBottom";

import NewBook from "../components/NewBook/Newbook";
import Seller from "../components/Seller/Seller";

const Home = () => {
  return (
    <>
      <Banner />
      <Seller />
      <NewBook />
      <Blog />
    </>
  );
};

export default Home;
