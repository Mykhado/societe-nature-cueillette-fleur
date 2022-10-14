import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { list_products } from "../Data";
import "./Home.css";
import "../components/Sidebar.css";

const Home = () => {
  const [selectUseCheck, setSelectUseCheck] = useState<string[]>([]);
  let result = [...list_products];
  if (selectUseCheck.length > 0) {
    result = result.filter((item) => selectUseCheck.includes(item.category));
  }
  return (
    <div className="home">
      <div className="side parCategorie">
        <Sidebar changeChecked={(data) => setSelectUseCheck(data)} />
      </div>
      <div className="homeBody">
        <h1>Home</h1>

        <ul>
          {result.map((item) => (
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
