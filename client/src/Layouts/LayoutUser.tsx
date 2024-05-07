import ContactBottom from "../user/components/Footer/ContactBottom";
import Header from "../user/components/Header/Header";
import Navbar from "../user/components/Navbar/Navbar";

type children = {
  children: any;
};

const LayoutUser: React.FC<children> = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content-app">{children}</div>
      <ContactBottom />
    </div>
  );
};

export default LayoutUser;
