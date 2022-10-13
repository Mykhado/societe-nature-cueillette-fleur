import "./Sidebar.css";
import TriParCategorie from "./TriParCategorie";
const Sidebar = () => {
  return (
    <div className="side">
      HELLO
      <div className="parCategorie">
        <TriParCategorie />
      </div>
      <div className="parPrix"></div>
      <div className="parAvis"></div>
    </div>
  );
};
export default Sidebar;
