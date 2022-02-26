import { useContext } from "react";
import IngredientsContext from "../../Context/IngredientsContext";
import "./Sidenav.scss";
const SideNav = () => {
  const { state, ingType, Dispatch } = useContext(IngredientsContext);
  return (
    <ul className="sidenav">
      <li className="sidenav-title">{ingType}</li>
      {Object.keys(state[ingType]).map((e) => {
        return (
          <li
            key={e}
            onClick={() => Dispatch({ type: `${ingType}/Add`, payload: e })}
          >
            {e}
          </li>
        );
      })}
    </ul>
  );
};

export default SideNav;
