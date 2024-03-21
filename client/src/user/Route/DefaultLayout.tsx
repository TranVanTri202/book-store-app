import HeaderMiddle from "../components/HeadderMiddle/HeaderMiddle";
import HeaderTop from "../components/HeaderTop/HeaderTop";
import Navbar from "../components/Navbar/Navbar";

type children = {
  children: any;
};

const DefaultLayout: React.FC<children> = ({ children }) => {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderMiddle />
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

export default DefaultLayout;
