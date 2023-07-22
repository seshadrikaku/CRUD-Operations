import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {

    const { id } = useParams()

    const [user, setUser] = useState({
        name: '',
        email: "",
        password: '',
        contact: '',
        course: ''
    });

    const navigate = useNavigate();


    const Update = async () => {
        await axios.get(`http://localhost:5000/api/user/${id}`)
            .then(response => {
                console.log(response.data)
                const info=response.data
                setUser(info)
            })
            .catch((error) => {
                console.log("getting inside error", error);
            });
    }
    useEffect(() => {
        Update()
    }, []);

    const handleChange = (e) => {
        const obj = { ...user, [e.target.name]: e.target.value }
        setUser(obj)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/user/${id}`, user)
            .then((response) => {
                console.log('User information updated successfully:', response.data);
                navigate('/');
            })
            .catch((error) => {
                console.log('Error updating user information:', error);
            });
    };

    return (
        <div>
            <div className='shadow px-5 py-4'>
                <h2>update user</h2>
                <form onSubmit={handleSubmit}>
                    <label className='fw-bold'>Name</label>
                    <br />
                    <input type='text' name='name' value={user.name} style={{ width: "80%" }} onChange={handleChange} className='rounded-2 py-1 ' />
                    <br />
                    <label className='fw-bold'>Email</label>
                    <br />
                    <input type='email' name='email' value={user.email}  style={{ width: "80%" }}  onChange={handleChange} className='rounded-2 py-1 border-3' />
                    <br />
                    <label className='fw-bold'>Password</label>
                    <br />
                    <input type='password' name='password' value={user.password} style={{ width: "80%" }}  onChange={handleChange} className='rounded-2  py-1' />
                    <br />
                    <label className='fw-bold'>Contact</label>
                    <br />
                    <input type='number' name='contact' value={user.contact}  style={{ width: "80%" }}  onChange={handleChange} className='rounded-2 py-1 ' />
                    <br />
                    <label className='fw-bold'>Course</label>
                    <br />
                    <input type='text' name='course' value={user.course} style={{ width: "80%" }}  onChange={handleChange} className='rounded-2 py-1 ' />
                    <br />
                    <br />
                    <input type='submit' value='Update' className='btn btn-primary mb-5' />
                </form>
            </div>
        </div>
    );
};

export default EditUser;
