import React from 'react'
import {Route, Routes} from 'react-router-dom'
import DisplayUsers from './DisplayUsers'
import AddUser from './AddUser'
import EditUser from './EditUser'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<DisplayUsers/>}/>
                <Route  path='/adduser' element={<AddUser/>}/>
                <Route  path='/edituser/:id' element={<EditUser/>}/>
            </Routes>

        </div>
    )
}

export default Main