// import React from 'react'
// import { useContext,useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import DataContext from './DataContext'

// export default function Edit() {

//     const context = useContext(context)
//     const location =useLocation()
//     console.log(location)
//     const navigate = useNavigate();
//     const index =(location.state.data);

//     useEffect(()=>{

//         return ()=>{
//             context.updateFunction(
//                 (prevObj)=>{
//                     prevObj[index-1]=newObj;
//                     return (prevObj)
//                 }
//             )
//         }
   

// },[context])


// const newObj ={
//     Name:context.entries[index-1].Name,
//     Age:context.entries[index-1].Age,
//     Course:context.entries[index-1].Course,
//     Batch:context.entries[index-1].Batch

// }

// const handleChange =(event)=>
// {
//     newObj[event.target.name]=event.target.value;

// }

// const handleUpdate =(event)=>{
//     console.log(context.entries[index-1])
//     context.updateFunction(
//         (prevObj)=>{
//         prevObj[index-1] = newObj;
//             return (prevObj)
//         }
//         )
//         navigate("/")
//     }
//     return (
//         <>
//         <input onChange={handleChange} Name="name" placeholder={context.entries[index-1].name}></input>
//         <input onChange={handleChange} Name="Age" placeholder={context.entries[index-1].Age}></input>
//         <input onChange={handleChange} Name="Course" placeholder={context.entries[index-1].Course}></input>
//         <input onChange={handleChange} Name="Batch" placeholder={context.entries[index-1].Batch}></input>
//         </>
//     )
// }
