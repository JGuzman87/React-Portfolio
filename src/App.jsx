import { Outlet } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap"
        rel="stylesheet"
      ></link>
    </div>
  );
}

export default App;
