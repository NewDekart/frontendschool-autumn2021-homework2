import Layout from "../Layout";

import "./index.css";

const Footer = ({ children }) => {
  return (
    <footer className="footer">
      <Layout>{children}</Layout>
    </footer>
  );
};

export default Footer;
