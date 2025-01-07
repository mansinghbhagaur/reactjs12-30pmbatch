import React, { useReducer } from 'react'
import { reducer } from './UseReducer'

const ReducerUse = () => {
      const [state, dispatch] = useReducer(reducer, { count: 0 })
      console.log(state)
      return (
            <div>
                  <h1>Main Content USe Reducer</h1>
                  <h1>Count: {state.count}</h1>
                  <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>Add</button>
                  <button>Sub</button>
                  <button>RESET</button>
            </div>
      )
}

export default ReducerUse
