import Footer from "../Footer";
import Link from "../Link";
import Content from "../Content";

import "./index.css";

function App() {
  return (
    <div className="app">
      <Content />
      <Footer>
        <Link href="#">Support</Link>
        <Link href="#">Learning</Link>
        <Link href="#">Русская версия</Link>
        <span className="footer-right">&copy; 2021 Amal Dusalin</span>
      </Footer>
    </div>
  );
}

export default App;
