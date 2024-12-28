import React from "react";
// import React, {useState} from "react";
import { useState } from "react";

const FunctionStructureCreate = () => {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(1);

  return (
    <>
      <h1>{count}</h1>
      <h1>Function Structure</h1>
      <button
        onClick={() => {
          setCount((prev) => {
            return prev * 2;
          });
        }}
      >
        Count +
      </button>
    </>
  );
};

export default FunctionStructureCreate;

// creating Regular Function
// export default function FunctionStructureCreate() {
//   return (
//     <>
//       <h1>Function Components</h1>
//     </>
//   );
// }

// // creating Arrow Function Components
// import { useCallback, useState } from "react";

// function Child({ onIncrement }) {
//   console.log("child rendered");
//   return (
//     <>
//       <h1>Child Component</h1>
//       <button onClick={onIncrement}>Click Me!</button>
//     </>
//   ); // function component
// }

// const FunctionStructureArrow = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");
//   const handleChange = useCallback(() => {
//     console.log("Button Clicked");
//     setCount((prev) => prev + 1);
//   }, []);
//   // syntax
//   // const [currentvalue, setvalue] = useState(intialValue);

//   return (
//     <>
//       {/* {console.log("re-rander")} */}
//       <h1>Arrow Function</h1>
//       <Child onIncrement={handleChange} />
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </>
//   );
// };

// export default FunctionStructureArrow;
