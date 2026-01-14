import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
