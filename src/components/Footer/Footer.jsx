import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        News App made by -{" "}
        <a href="https://www.linkedin.com/in/harsh-ashok-athavale/" target="__blank">
          Harsh Athavale
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://github.com/Harsh-Athavale-19" target="__blank">
          <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/harsh-ashok-athavale/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://harsh-athavale.netlify.app/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
