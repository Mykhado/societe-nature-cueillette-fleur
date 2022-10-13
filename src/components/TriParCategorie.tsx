import Input from "./Input";
import { list_products } from "../Data";

const TriParCategorie = () => {
  return (
    <div>
      <ul>
        <li>
          <Input
            handleChange={(e) => console.log(e.target.value)}
            inputType="checkbox"
            inputValue="plantes fleuries"
          />
        </li>
        <li>
          {" "}
          <Input
            handleChange={(e) => console.log(e.target.value)}
            inputType="checkbox"
            inputValue="orchides"
          />
        </li>
        <li>
          {" "}
          <Input
            handleChange={(e) => console.log(e.target.value)}
            inputType="checkbox"
            inputValue="cactus et plantes grasses"
          />
        </li>
        <li>
          {" "}
          <Input
            handleChange={(e) => console.log(e.target.value)}
            inputType="checkbox"
            inputValue="bonsaïs"
          />
        </li>
        <li>
          {" "}
          <Input
            handleChange={(e) => console.log(e.target.value)}
            inputType="checkbox"
            inputValue="plantes vertes"
          />
        </li>
        <li>
          {" "}
          <Input
            handleChange={(e) => console.log(e.target.value)}
            inputType="checkbox"
            inputValue="palmiers d'intérieur"
          />
        </li>
      </ul>
      <ul>
        {list_products.map((item) => (
          <li key={item.id}>
            id product : {item.id}
            -name: {item.name} -categorie: {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TriParCategorie;
