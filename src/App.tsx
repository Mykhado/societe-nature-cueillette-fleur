import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
