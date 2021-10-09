import "./index.css";

const Link = ({ href, children, target = "_self" }) => {
  return (
    <a href={href} target={target} className="a">
      {children}
    </a>
  );
};

export default Link;
