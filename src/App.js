import SideNav from "./Component/SideNav/SideNav";
import "./App.scss"
import Main from "./Component/Main/Main";
import { IngredientsProvider } from "./Context/IngredientsContext";
import { useReducer, useState } from "react";
import ShowRecipe from "./Component/ShowRecipe/ShowRecipe";

const Initialingredients = {
  ingredients: {
    paneer: 0,
    sausage: 0,
    bread: 0,
    Spice: 0,
    Sugar: 0
  },
  spice: {
    nutmeg: 0,
    cardmom: 0,
    clove: 0,
    peper: 0
  }
};

const IngredientReducer = (state, action) => {
  switch (action.type) {
    case "ingredients/Add":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] + 1
        }
      };
    case "ingredients/Remove":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] - 1
        }
      };
    case "spice/Add":
      return {
        ...state,
        spice: {
          ...state.spice,
          [action.payload]: state.spice[action.payload] + 1
        }
      };
    case "spice/Remove":
      return {
        ...state,
        spice: {
          ...state.spice,
          [action.payload]: state.spice[action.payload] - 1
        }
      };
    default:
      return state;
  }
};
const App = () => {
  const [state, Dispatch] = useReducer(IngredientReducer, Initialingredients);
  const [recipeName, setRecipeName] = useState("");
  const [ingType, setIngType] = useState("ingredients");
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <IngredientsProvider
        value={{
          state,
          Dispatch,
          recipeName,
          setRecipeName,
          ingType,
          setIngType,
          setShow
        }}
      >
        
        {show ? <ShowRecipe/> : <> <SideNav/> <Main /></>}
      </IngredientsProvider>
    </div>
  );
};

export default App;
