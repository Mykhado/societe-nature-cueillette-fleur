import Input from "./Input";
import { list_products } from "../Data";
import _ from "lodash";
import "./TriParCategorie.css";
import { useState, Dispatch, SetStateAction } from "react";

export interface resultCheckBox {
  checkCategorie: string;
}

const TriParCategorie = ({
  setUserCheck,
}: {
  setUserCheck: Dispatch<SetStateAction<string>>;
}) => {
  // const [userCheck, setUserCheck] = useState<string>("");
  // let categorieCheck: string[] = [];
  const tabCategorieProduct = _.uniq(
    list_products.map((item) => item.category)
  );

  return (
    <div>
      <div className="filtre">
        <ul>
          {tabCategorieProduct.map((item, i) => (
            <li key={i} className="tricateside">
              <Input
                handleChange={(e) => {
                  // if (e.target.checked === true) {
                  setUserCheck(e.target.value);

                  //   categorieCheck=[...];
                  // } else {
                  //   setUserCheck(e;
                  //   categorieCheck=[...userCheck];
                  // }
                }}
                inputType="checkbox"
                inputValue={item}
              />

              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* <>{console.log(userCheck)};</> */}
    </div>
  );
};
export default TriParCategorie;
