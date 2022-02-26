import { createContext } from "react";

const IngredientsContext = createContext();

export const IngredientsProvider = IngredientsContext.Provider;

export default IngredientsContext;
