import "./Sidebar.css";
import { useState, Dispatch, SetStateAction } from "react";
import _ from "lodash";
import { list_products } from "../Data";
// import Home from "../pages/Home";
// import App from "../App";
export interface categorieCheck {
  handleChangeChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setUserCheck: string[];
}

const Sidebar = () => {
  const [userCheck, setUserCheck] = useState<string[]>([]);
  // let categorieCheck: string[] = [];
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
    setUserCheck([...unTableauTampon]);
    console.log(unTableauTampon);
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
