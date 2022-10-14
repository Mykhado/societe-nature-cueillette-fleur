import TriParCategorie from "../components/TriParCategorie";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { list_products } from "../Data";
import "./Home.css";
import "../components/Sidebar.css";
const Home = ({ userCheck }: { userCheck: string }) => {
  // const [userInputPlantesFleuries, setUserInputPLantesFleuries] = useState<
  //   boolean | string
  // >("");
  // const [userInputOrchides, setUserInputOrchides] = useState<boolean | string>(
  //   ""
  // );
  // const [userInputCactusEtPlantesGrasses, setUserInputCactusEtPlantesGrasses] =
  //   useState<boolean | string>("");
  // const [userInputBonsais, setUserInputBonsais] = useState<boolean | string>(
  //   ""
  // );
  // const [userInputPlantesVertes, setUserInputPlantesVertes] = useState<
  //   boolean | string
  // >("");
  // const [userInputPalmiersDinterieur, setUserInputPalmiersDinterieur] =
  //   useState<boolean | string>("");

  return (
    <div className="home">
      <div className="side parCategorie">
        <Sidebar />
      </div>
      <div className="homeBody">
        <h1>Home</h1>
        <ul>
          {list_products
            .filter((item) => item.category.includes(userCheck))
            .map((item) => (
              <li key={item.id}>
                id product : {item.id}
                -name: {item.name} -categorie: {item.category}
              </li>
            ))}
        </ul>
        {/* <TriParCategorie checkCategorie ={(e) => setUserCheck(e.target.value)} />*/}
      </div>
    </div>
  );
};

export default Home;
