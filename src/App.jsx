import { useState } from "react";
import "./App.css";
import ClassComponents from "./components/ClassComponents";
import FunctionsComponents from "./components/FunctionsComponents";
import LifeCycleMethod from "./lifecyclemethod/LifeCycleMethod";
import FunctionStructureCreate from "./functionComponents/FunctionStructureCreate";
import ThemeChanger from "./projecthooks/ThemeChanger";
import UseEffectFile from "./hooks/UseEffectFile";
import TableData from "./projecthooks/muitableorloader/TableData";
import Context from "./hooks/Context";
import Content from "./projecthooks/project/pages/Content";
import UseMemo from "./hooks/UseMemo";
import UseCallback from "./hooks/UseCallback";
import UseRef from "./hooks/UseRef";
import UseLayoutEffect from "./hooks/UseLayoutEffect";
import ReducerUse from "./hooks/ReducerUse.jsx";


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

      {/* theme changer */}
      {/* <ThemeChanger /> */}

      {/* useEffect File */}
      {/* <UseEffectFile  /> */}

      {/* table data component use */}
      {/* <TableData /> */}

      {/* useContext component use */}
      {/* <Content /> */}

      {/* useMemo */}
      {/* <UseMemo /> */}

      {/* usecallback hook */}
      {/* <UseCallback /> */}

      {/* useRef */}
      {/* <UseRef /> */}
      {/*  */}
      {/* <UseLayoutEffect /> */}

      {/* main content show and use dispatch */}
      <ReducerUse />

    </>
  );
}

export default App;
