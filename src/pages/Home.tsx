import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { list_products } from "../Data";
import "./Home.css";
import "../components/Sidebar.css";
import { categorieCheck } from "../components/Sidebar";

const Home = ({ setUserCheck }: categorieCheck) => {
  return (
    <div className="home">
      <div className="side parCategorie">
        <Sidebar
        // categorieCheck ={(e) => setUserCheck(e)}
        />
      </div>
      <div className="homeBody">
        <h1>Home</h1>

        <ul>
          {list_products.map((item) => (
            <li key={item.id}>
              id product : {item.id}
              -name: {item.name} -categorie: {item.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
