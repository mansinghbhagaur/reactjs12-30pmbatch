import { Button } from '@mui/material';
import { useEffect, useState } from 'react'
import { useThemeContext } from './Context';


const UseEffectFile = () => {
      // const { name, age } = useContext(ThemeContext);
      const { name, age } = useThemeContext();
      console.log('name', name)
      console.log('age', age)
      const [count, setCount] = useState(0);
      const [add, setAdd] = useState(0);
      const [data, setData] = useState([]);
      const [loader, setLoader] = useState(true);

      const FetchData = async () => {
            try {
                  const resData = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
                  // console.log(resData, 'res');
                  setData(resData);
                  setLoader(false);
            } catch (error) {
                  console.log(error);
            }
      }

      useEffect(() => {
            console.log('useEffect Hook is called');
            FetchData();

      }, [count])


      if (loader) {
            return <div style={{
                  display: 'flex',
                  justifyContent: "center",
                  alignItems: 'center',
                  minHeight: '90vh',
                  fontSize: '50px'
            }}>Loading...</div>
      }



      return (
            <div>
                  <h1>Use Effect File</h1>
                  <h1>{count}</h1>
                  <h1>Add: {add}</h1>
                  <button onClick={() => setCount(count + 1)}>Add</button>
                  <button onClick={() => setAdd(add + 1)}>AnotherAdd</button>


                  {/* row par loading karna */}

                  {/* <ul style={{ fontSize: "25px" }}> Table
                        {
                              loader ? <h1>Loading</h1> : data?.map((item) => (
                                    <li key={item.id}>Id: {item.id} Name: {item.name}</li>
                              ))
                        }
                  </ul> */}

                  {/* <ul style={{ fontSize: "25px" }}> Table
                        {
                              data?.map((item) => (
                                    <li key={item.id}>Id: {item.id} Name: {item.name}</li>
                              ))
                        }
                  </ul>

                  {loader && <h1>Loading</h1>} */}


                  {/* third way */}

                  <ul style={{ fontSize: "25px" }}> {name}{age}
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
