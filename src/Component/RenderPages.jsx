import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
// import Navbar from './Navbar'
import Home from './Home'
import StudentData from './StudentData'
import ContactUs from './ContactUs'
import { AddNewStudent } from './AddNewStudent'
// import Edit from './Edit'


export default function RenderPages() {
  return (
    <Routes>
        {/* <Route path='/' element={<Navbar/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<StudentData/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/addnewstudent' element={<AddNewStudent/>}/>
        {/* <Route path='/studentdata' element={<StudentData/>}/> */}
        {/* <Route path='/edit' element={<Edit/>}/> */}

    </Routes>
  )
}


