import { Outlet } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Navbar /> */}

      <Project />
      <Footer />
    </div>
  );
}

export default App;
