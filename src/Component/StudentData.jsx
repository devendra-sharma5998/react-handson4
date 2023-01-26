import React,{useContext} from 'react'
// import { Link } from 'react-router-dom';
import DataContext from './DataContext'
import { AddNewStudent } from './AddNewStudent';
import { Link } from 'react-router-dom';
// import Edit from './Edit';
// import StudentsTable from './StudentsTable';


// const handleAdd=()=>{
//   console.log("called")
  
// }

export default function StudentData() {

  const context=useContext(DataContext);
  console.log(context)


  // const [data,setData]=useState()
  return (
    <div>
     <Link to="addnewstudent"> <button id='add' >Add New Student</button></Link>
      <table id='box'>
        <thead id='details'>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Btach</th>
            <th>Change</th>
          </tr>
          <tr>
            <td>xyz</td>
            <td>21</td>
            <td>Python</td>
            <td>EA18</td>
          <td> <button> Edit</button></td>
          </tr>
          <tr>
            <td>shub</td>
            <td>20</td>
            <td>C++</td>
            <td>EA6</td>
            <td> <button> Edit</button></td>
          </tr>
          <tr>
            <td>nagandra</td>
            <td>18</td>
            <td>Marketing</td>
            <td>14</td>
            <td> <button> Edit</button></td>
          </tr>
          <tr>
            <td>Loreya</td>
            <td>21</td>
            <td>Python</td>
            <td>EA18</td>
            <td> <button> Edit</button></td>
          </tr>
          <tr>
            <td>Bunny</td>
            <td>21</td>
            <td>Python</td>
            <td>EA18</td>
            <td> <button> Edit</button></td>
          </tr>
          <tr>
            <td>Sunny</td>
            <td>21</td>
            <td>Python</td>
            <td>EA18</td>
            <td> <button> Edit</button></td>
          </tr>
        </thead>
      </table>

      {/* <tbody>
        {
          context.entries.map((item)=>(
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Course}</td>
              <td>
                {
                  <Link to="./" state={{data:item.id}}>Edit</Link>
                  
                }
              </td>

            </tr>
          ))
        }
      </tbody> */}
      {/* <DataContext.Provider value={data} */}
        {/* <StudentsTable/> */}
        {/* <Edit/> */}


{/*  </DataContext.Provider> */}
    <div></div>

    </div>
  )
}
