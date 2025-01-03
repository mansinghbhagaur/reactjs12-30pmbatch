import React, { useMemo } from 'react'

const UseMemo = () => {
      const [count, setCount] = React.useState(0);
      const [text, setText] = React.useState('');


      const ExpensiveValue = useMemo(() => {
            console.log('function called')
            return count * 10;
      }, [text]);

      // const ExpensiveValue = () => {
      //       console.log('function called')
      //       return count * 10;
      // }

      return (
            <div>
                  <h1>Expensive Value: {ExpensiveValue}</h1>
                  <h1>{count}</h1>
                  <button onClick={() => setCount(count + 1)}>Add</button>
                  <input type='text' onChange={(e) => setText(e.target.value)} />
            </div>
      )
}

export default UseMemo
