import Footer from "../Footer";
import Link from "../Link";
import Content from "../Content";
import FooterItem from "../FooterItem";

import "./index.css";

function App() {

  return (
    <div className="app">
      <Content />
      <Footer>
        <FooterItem><Link>Support</Link></FooterItem>
        <FooterItem><Link>Learning</Link></FooterItem>
        <FooterItem><Link>Русская версия</Link></FooterItem>
        <FooterItem right><span>&copy; 2021 Amal Dusalin</span></FooterItem>
      </Footer>
    </div>
  );
}

export default App;
