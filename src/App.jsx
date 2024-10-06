import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Experiences } from "./pages/Experiences";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/experience" element={<Experiences/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  );
}

export default App;
