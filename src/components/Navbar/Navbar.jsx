import "./Navbar.css";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../../assets/logo.jpg";

const Navbar = ({ setCategory }) => {
  return (
    <>
      <div className="nav">
        <div className="icon">
          <Sidebar setCategory={setCategory} />
        </div>
        <img style={{ cursor: "pointer" }} src={Logo} alt="logo" height="80%" />
      </div>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  setCategory: PropTypes.func,
};
