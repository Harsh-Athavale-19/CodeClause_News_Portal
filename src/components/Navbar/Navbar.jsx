import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="icon"></div>
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
