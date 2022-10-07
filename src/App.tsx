import "./App.css";
import NavBar from "./components/NavBar";

const App = () => {
  const message: string = "Hello World";
  const handleClick = (name: string) => alert(`Bonjour ${name} !`);
  const handleClickSansParam = () => alert("c'est bien tu sais cliquer!");
  return (
    <div>
      <NavBar />
      <p>{message}</p>
      <button className="color-pink" onClick={() => handleClick("Cassie")}>
        Test Cassie
      </button>
      <button className="color-blue" onClick={() => handleClick("Jayceone")}>
        Test Jayceone
      </button>
      <p>Coucou</p>
      <button className="color-red" onClick={handleClickSansParam}>
        Test Basique
      </button>
    </div>
  );
};

export default App;
