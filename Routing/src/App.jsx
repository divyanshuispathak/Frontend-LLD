import Body from "./components/Body";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./components/Team";
import Login from "./components/Login";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <h1 className="bg-blue-50 flex justify-between">
        Hello
        <nav>
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/team">Team </a>
          <a href="/login">Login </a>
        </nav>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route
              path="/about"
              element={<About language={language} />}
            ></Route>
            <Route path="/team" element={<Team />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
