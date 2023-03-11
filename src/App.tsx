import "./App.css";
import Work from "./Components/Work/Work";
import About from "./Components/About/About";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.add("load");
      } else el.target.classList.remove("load");
    });
  });

  return (
    <div className="App">
      <NavBar></NavBar>
      <About></About>
      <Work></Work>
    </div>
  );
}

export default App;
