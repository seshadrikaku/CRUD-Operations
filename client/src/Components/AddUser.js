import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const AddUser = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    course: ""
  })
  
  const handleChange = (e) => {
    const obj = { ...user, [e.target.name]: e.target.value }
    setUser(obj)
   
  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/user", user)
   
      .then((response) => {
        console.log(response)
       
        navigate("/")
      }).catch((err) => {
        console.log("axios error", err)
      })
  }


  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12 align-center '>
            <div className='shadow px-5 py-4'>
              <form onSubmit={handleSubmit}  >
                <label className='fw-bold'>Name</label><br/>
                <input type='text'  name='name' value={user.name} onChange={handleChange} required style={{width:"80%"}} className='rounded-2 ' /><br />
                <label className='fw-bold'>Email</label><br/>
                <input type='email' name='email'  max="25" value={user.email} onChange={handleChange} required style={{width:"80%"}} className='rounded-2'/><br />
                <label className='fw-bold'>Password</label><br/>
                <input type='password' name='password' value={user.password} onChange={handleChange} required style={{width:"80%"}} className='rounded-2' /><br />
                <label className='fw-bold'>Contact</label><br/>
                <input type='number' name='contact' value={user.contact} onChange={handleChange}required style={{width:"80%"}} className='rounded-2' /><br />
                <label className='fw-bold'>Course</label><br/>
                <input type='text' name='course' value={user.course} onChange={handleChange} required style={{width:"80%"}} className='rounded-2' />
                <br /><br />
                <input type='submit' value="submit" className='btn btn-outline-primary mb-5' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddUser