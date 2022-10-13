import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TriParCategorie from "./components/TriParCategorie";

const App = () => {
  // const message: string = "Hello World";
  // const handleClick = (name: string) => alert(`Bonjour ${name} !`);
  // const handleClickSansParam = () => alert("c'est bien tu sais cliquer!");
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
          <Route path="*" element={<NotFound />} />

          {/* <p>{message}</p>
      <button className="color-pink" onClick={() => handleClick("Cassie")}>
        Test Cassie
      </button>
      <button className="color-blue" onClick={() => handleClick("Jayceone")}>
        Test Jayceone
      </button>
      <p>Coucou</p>
      <button className="color-red" onClick={handleClickSansParam}>
        Test Basique
      </button> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
