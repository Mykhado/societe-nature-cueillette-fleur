import "./Sidebar.css";
import { useState } from "react";
import _ from "lodash";
import { list_products } from "../Data";
export interface categorieCheck {
  changeChecked: (unTableauTampon: string[]) => void;
}

const Sidebar = ({ changeChecked }: categorieCheck) => {
  const [userCheck, setUserCheck] = useState<string[]>([]);
  const tabCategorieProduct = _.uniq(
    list_products.map((item) => item.category)
  );

  function handleChangeChecked(e: React.ChangeEvent<HTMLInputElement>) {
    let unTableauTampon: string[] = [];
    if (e.currentTarget.checked) {
      unTableauTampon = [...userCheck, e.currentTarget.value];
    } else {
      unTableauTampon = [
        ...userCheck.filter(
          (unNomBateau) => unNomBateau !== e.currentTarget.value
        ),
      ];
    }
    setUserCheck(unTableauTampon);
    changeChecked(unTableauTampon);
  }
  return (
    <div className="side">
      HELLO
      <div className="parCategorie">
        <div className="filtre">
          <ul>
            {tabCategorieProduct.map((item, i) => (
              <li key={i} className="tricateside">
                <input
                  onChange={handleChangeChecked}
                  type="checkbox"
                  value={item}
                />
                <label htmlFor={item}> {item}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="parPrix"></div>
      <div className="parAvis"></div>
    </div>
  );
};
export default Sidebar;
