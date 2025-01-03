import React, { memo, useCallback, useState } from 'react'

const UseCallback = () => {
      const [count, setCount] = useState(0);
      const [text, setText] = useState('')

      const onIncrement = useCallback(() => {
            // console.log('rendering function')
            setCount(count + 1);
      }, [text])


      // const onIncrement = () => {
      //       // console.log('rendering function')
      //       setCount(count + 1);
      // }



      return (
            <div>
                  <h1>UseCallback Hook</h1>
                  <h1>Parents Components</h1>
                  <h1>{count}</h1>
                  <Child onIncrement={onIncrement} />
                  <input type='text' onChange={(e) => setText(e.target.value)} />
            </div>
      )
}

const Child = memo(({ onIncrement }) => {
      console.log('child rendering')
      return (
            <>
                  <h1>Child component</h1>
                  <button onClick={onIncrement}>Add</button>
            </>
      )
})



export default UseCallback


