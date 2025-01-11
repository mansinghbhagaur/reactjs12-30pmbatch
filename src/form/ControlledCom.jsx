// fisrt step

// import React, { useState } from 'react'

// const ControlledCom = () => {
//       const [name, setName] = useState('');
//       const handleSubmit = (e) => {
//             e.preventDefault();
//             console.log(name)
//       }

//       return (
//             <div>
//                   <h1>Controlled Component</h1>
//                   <form onSubmit={handleSubmit}>
//                         <label>Enter your name:</label>
//                         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                         <button type='submit'>Submit</button>
//                   </form>
//             </div>
//       )
// }

// export default ControlledCom

// second step
import React, { useState } from 'react'

const ControlledCom = () => {
      const initialValue = {
            name: '',
            password: '',
            email: ''
      };

      const [formData, setFormData] = useState(initialValue);
      const [error, setError] = useState({ name: '', password: '', email: '' });

      console.log(error);
      // onChange function is called whenever the user types something in the input field
      const handleChange = (e) => {
            // const value = e.target.value;
            // const name = e.target.name;

            // short code
            const { name, value } = e.target;
            if (name === 'email' && !value.includes('@')) {
                  setError((prev) => ({ ...prev, email: 'Invalid email format' }))
            } else if (name === 'password' && value.length < 6) {
                  setError((prev) => ({ ...prev, password: 'Password must be at least 6 characters long' }))
            } else {
                  setError({ name: '', password: '', email: '' })// reset error message
            }
            setFormData((prev) => ({ ...prev, [name]: value }));
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            // if (formData.name === '' || formData.password === "" || formData.email === "") return setError("All fields are required");
            console.log(formData.name)
            console.log(formData.password)
            console.log(formData.email)
            setFormData(initialValue)
            setError('')
      }

      return (
            <div>
                  <h1>Controlled Component</h1>
                  {/* <form onSubmit={handleSubmit}>
                        <label>Enter your name:</label>
                        <input type="text" value={formData.name || ""} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /><br /><br />
                        <label>Enter your password:</label>

                        <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                        <br /><br />
                        <button type='submit'>Submit</button>
                  </form> */}

                  <form onSubmit={handleSubmit}>
                        <label>Enter your name:</label>
                        <input type="text" value={formData.name} name='name' onChange={(e) => handleChange(e)} /><br /><br />
                        <label>Enter your password:</label>

                        <input type="password" value={formData.password} name='password' onChange={(e) => handleChange(e)} />
                        <br /><br />
                        {error && <p style={{ color: 'red' }}>{error.password}</p>}
                        <label>Enter your email:</label>
                        <input type="email" value={formData.email} name='email' onChange={(e) => handleChange(e)} />
                        <br /><br />
                        {error && <p style={{ color: 'red' }}>{error.email}</p>}

                        <button type='submit'>Submit</button>
                        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                  </form>
                  <hr />
            </div>
      )
}

export default ControlledCom