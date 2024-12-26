import { useState } from "react";

export default function FunctionsComponents() {
  //   let count = 0;
  const [count, setCount] = useState({
    count: 0,
  });

  const update = () => {
    setCount({ count: count.count + 1 });
    // console.log(count++);
  };

  return (
    <>
      <h1>Count: {count.count}</h1>
      <button onClick={update}>Inc</button>
    </>
  );
}
