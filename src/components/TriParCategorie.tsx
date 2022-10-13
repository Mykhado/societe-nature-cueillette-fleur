import Input from "./Input";
import { list_products } from "../Data";
import _ from "lodash";
import "./TriParCategorie.css";
import { useState } from "react";

const TriParCategorie = () => {
  const [userCheck, setUserCheck] = useState();
  const tabCategorieProduct = _.uniq(
    list_products.map((item) => item.category)
  );
  console.log(tabCategorieProduct);
  return (
    <div>
      <div className="filtre">
        <ul>
          {tabCategorieProduct.map((item) => (
            <li className="tricateside">
              <Input
                handleChange={(e) => console.log(e.target.value)}
                inputType="checkbox"
                inputValue={item}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TriParCategorie;
