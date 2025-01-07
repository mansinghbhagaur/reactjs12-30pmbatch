import React, { useRef } from 'react'

const UseRef = () => {
      const inputRef = useRef(null);
      // console.log('inputRef', inputRef)

      const handleClick = () => {
            // console.log('inputRef', inputRef.current.value);
            inputRef.current.focus();
      }

      return (
            <div>
                  <h1>Use Ref</h1>
                  <input type="text" ref={inputRef} />
                  <button onClick={handleClick}>Submit</button>
            </div>
      )
}

export default UseRef
