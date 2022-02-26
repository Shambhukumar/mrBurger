import { useContext, useEffect, useState } from "react";
import IngredientsContext from "../../Context/IngredientsContext";
import "./Main.scss";
const Main = () => {
  const { state, ingType, setIngType, Dispatch, recipeName,
    setRecipeName, setShow } = useContext(
    IngredientsContext
  );

  return (
    <div className="main"> 
      <h1>Please Chose your {ingType}</h1>
      <input value={recipeName} onChange={(e)=> setRecipeName(e.target.value)} placeholder="Your Recipe Name"/>
      <ul>
        <li className="main-title"><span>{ingType}</span> <span className="main-title-quan">Quantity</span></li>
        {Object.entries(state[ingType]).map(([key, value]) => {
          if (value) {
            return (
              <li key={key}>
                <span>
                  {key}: 
                </span>
                <div className="main-quantity">
               
               
                <span className="main-quantity-btn"
                  onClick={() =>
                    Dispatch({ type: `${ingType}/Remove`, payload: key })
                  }
                >
                  -
                </span>
                <span className="main-quantity-txt">{value}</span>
                <span className="main-quantity-btn"
                  onClick={() =>
                    Dispatch({ type: `${ingType}/Add`, payload: key })
                  }
                >
                  +
                </span>
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>
     {ingType ==="spice"? <div><button onClick={() => setIngType("ingredients")}>
        Go Back To Ingredient's
      </button> or <button onClick={(e)=>setShow(true)}> Look at Your Recipe</button></div>:
      <button onClick={() => setIngType("spice")}>Select Your Spice's </button>}
    </div>
  );
};

export default Main;
