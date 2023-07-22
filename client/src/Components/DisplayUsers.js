import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const DisplayUsers = () => {
  
  const [user, setUser] = useState([])

  const getUserList = () => {
    axios.get("http://localhost:5000/api/user")
      .then((response) => {
        console.log(response)
        setUser(response.data)
      }).catch((e) => {
        console.log(e)
      })
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/user/${id}`)
      .then(response => {
        console.log(response)
        window.location.reload()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getUserList()
  }, [])

  return (
    <>
      
        
          <div className='justify-content-center '>
            <table style={{border:"2px solid red"}}>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Course</th>
                <th>Delete</th>
                <th>EditUser</th>
              </tr>
                {
                user.map((userdata, index) => {
                  return (
                    <tr key={userdata._id}>
                      <td>{index+1}</td>
                      <td>{userdata.name}</td>
                      <td>{userdata.email}</td>
                      <td> {userdata.contact}</td>
                      <td>{userdata.course}</td>
                      <td>
                        <button className='btn btn-danger' onClick={(e) => deleteUser(userdata._id)}>Delete</button>
                      </td>
                      <td>
                      <Link to={`/edituser/${userdata._id}`} className='btn btn-primary'>Update</Link>
                      </td>
                    </tr>

                  )
                })
              }
            </table>
          </div>
        
      
    </>
  )
}

export default DisplayUsers