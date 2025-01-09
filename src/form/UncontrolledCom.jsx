import React, { useRef } from 'react'

const UncontrolledCom = () => {
      const inputRef = useRef(null);

      const handlSubmit = (e) => {
            e.preventDefault();
            console.log(inputRef.current.name)
      }

      return (
            <div>
                  <h1>Uncontrolled Componnents</h1>
                  <form onSubmit={handlSubmit}>
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" ref={inputRef} />
                        <button type='submit'>Submit</button>
                  </form>
            </div>
      )
}

export default UncontrolledCom
