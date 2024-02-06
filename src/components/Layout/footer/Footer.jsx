import scss from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={scss.footer}>
      <div>
        <hr />
        <p>© 2024 TextNow All Rights Reserved.</p>
      </div>
      <p>Terms </p>
      <p>Privacy Policy</p>
      <p>2G Fair Use Policy</p>
    </div>
  );
};

export default Footer;
