import { useContext } from "react";
import IngredientsContext from "../../Context/IngredientsContext";
import "./showrecipe.scss";
import BurgerImg from "../Assets/burger.jpg";
const ShowRecipe = () =>{
const {state, recipeName} = useContext(IngredientsContext);
    return(
        <div className="showRecipe">
            <div className="showRecipe-head">{recipeName}</div>
            <div className="showRecipe-imgContainer">
                <img src={BurgerImg} alt="burger image"/>
            </div>
            <div className="showRecipe-item">Ingredients used</div>
            <ul>
            <li className="showRecipe-title"><span>Ingredient Name</span> <span className="showRecipe-title-quan">Quantity</span></li>
                {Object.entries(state.ingredients).map(([key,val])=>{
                    if(val){
                            return <li><span>{key}</span><span>{val}</span></li>
                    }
                    return null
                })}
            </ul>
            <div className="showRecipe-item">Spice used</div>
            <ul>
            <li className="showRecipe-title"><span>Spice's Name</span> <span className="showRecipe-title-quan">Quantity</span></li>
                {Object.entries(state.spice).map(([key,val])=>{
                    if(val){
                            return <li><span>{key}</span><span>{val}</span></li>
                    }
                    return null
                })}
            </ul>
        </div>
    )
}

export default ShowRecipe;