import { useState } from "react";
import "./App.css";
import ClassComponents from "./components/ClassComponents";
import FunctionsComponents from "./components/FunctionsComponents";
import LifeCycleMethod from "./lifecyclemethod/LifeCycleMethod";
import FunctionStructureCreate from "./functionComponents/FunctionStructureCreate";
import ThemeChanger from "./projecthooks/ThemeChanger";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      {/* <LifeCycleMethod /> */}
      {/* <FunctionsComponents /> */}
      {/* <ClassComponents /> */}
      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}

      {/* Function Components Add */}
      {/* <FunctionStructureCreate /> */}
      <ThemeChanger />
    </>
  );
}

export default App;
