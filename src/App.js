import { createContext } from "react";
import Parent from "./Components/Parent";
import { useState } from "react";
import ReducerCounter from "./Components/ReducerCounter";
import ComplexForm from "./Components/ComplexForm";

export const COUNTER_CONTEXT = createContext();
function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount }

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div>
        <Parent></Parent>
        <ReducerCounter></ReducerCounter>
        <ComplexForm />
      </div>
    </COUNTER_CONTEXT.Provider>

  );
}

export default App;
