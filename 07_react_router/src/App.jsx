import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
import User from "./components/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/:userId" element={<User/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
