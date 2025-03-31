import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Header from "./components/Header";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/accordion" element={<Accordion />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
