import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  return (
    <>
      <div className="nav">
        <div className="icon">
          <Sidebar setCategory={setCategory} />
        </div>
        <img
          style={{ cursor: "pointer" }}
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
          // src={Logo}
          alt=""
          height="80%"
        />
      </div>
    </>
  );
};

export default Navbar;
