import { Button } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react'

const UseEffectFile = () => {
      const [count, setCount] = useState(0);
      const [add, setAdd] = useState(0);
      const [data, setData] = useState([]);
      console.log(data, "data")

      const FetchData = async () => {
            const resData = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
            // console.log(resData, 'res');
            setData(resData);
      }

      useEffect(() => {
            console.log('useEffect Hook is called');
            FetchData();

      }, [count])

      return (
            <div>
                  <h1>Use Effect File</h1>
                  <h1>{count}</h1>
                  <h1>Add: {add}</h1>
                  <button onClick={() => setCount(count + 1)}>Add</button>
                  <button onClick={() => setAdd(add + 1)}>AnotherAdd</button>

                  <ul>
                        {
                              data?.map((item) => (
                                    <li key={item.id}>Id: {item.id} Name: {item.name}</li>
                              ))
                        }
                  </ul>

                  {/* <Button variant='contained' color='primary'>+</Button>
                  <Button variant='contained' color='secondary'>+</Button>
                  <Button variant='contained' color='error'>+</Button>
                  <Button variant='contained' color='info'>+</Button>
                  <Button variant='contained' color='warning'>+</Button>
                  <Button variant='contained' color='success' size='small'>+</Button>
                  <Button variant='contained' color='success' size='medium'>+</Button>
                  <Button variant='contained' color='success' size='large'>+</Button> */}

            </div >
      )
}

export default UseEffectFile
