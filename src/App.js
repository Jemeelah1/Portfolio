import { Fade, Zoom } from "react-reveal";
import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Portfolio />
    </>
  );
}

export default App;
