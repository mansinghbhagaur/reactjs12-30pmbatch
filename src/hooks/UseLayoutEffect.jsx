import React, { useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
      const divRef = useRef(null);

      useLayoutEffect(() => {
            const width = divRef.current.offsetWidth;
            // const height = divRef.current.offsetHeight;
            console.log("width", width)
            // console.log('Height', height)
            divRef.current.style.height = `${width / 2}px`;
            divRef.current.style.color = '#fff';
      }, []);


      return (
            <div ref={divRef} style={{ width: '100%', background: 'blue', }}>
                  <h1>Use Layout Effect</h1>
            </div>
      )
}

export default UseLayoutEffect
