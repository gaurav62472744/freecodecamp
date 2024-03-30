import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Aluminicard from "./components/Aluminicard";
import data from "./components/data";
import Home from "./pages/Home";
import AllRoutes from "./routes/allroutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
