import TriParCategorie from "../components/TriParCategorie";
import { useState } from "react";

const Home = () => {
  const [userInput, setUserInput] = useState<boolean | string>("");
  const [userInput2, setUserInput2] = useState<boolean | string>("");
  const [userInput3, setUserInput3] = useState<boolean | string>("");
  const [userInput4, setUserInput4] = useState<boolean | string>("");
  const [userInput5, setUserInput5] = useState<boolean | string>("");
  const [userInput6, setUserInput6] = useState<boolean | string>("");

  return (
    <div>
      <h1>Home</h1>
      <TriParCategorie />
    </div>
  );
};

export default Home;
