import ContactBottom from "../user/components/Footer/ContactBottom";
import HeaderMiddle from "../user/components/HeadderMiddle/HeaderMiddle";
import HeaderTop from "../user/components/HeaderTop/HeaderTop";
import Navbar from "../user/components/Navbar/Navbar";

type children = {
  children: any;
};

const LayoutUser: React.FC<children> = ({ children }) => {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderMiddle />
      <Navbar />
      <div className="">{children}</div>
      <ContactBottom />
    </div>
  );
};

export default LayoutUser;
