import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
let Employees = () => {
    let [employees, setEmployees] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');
    useEffect(() =>{
     let dataURL = 'https://jsonplaceholder.typicode.com/users';
     Axios.get(dataURL).then((response) => {
        setEmployees(response.data);
     }).catch((error) => {
         console.error(error);
         setErrorMessage(error);
     });
    }, []);
    return (
     <React.Fragment>
         <section className='p-3'>
             <div className="container">
                 <div className="row">
                     <div className="col">
                         <h3 className='p-3 text-secondary'>Employee Deatils</h3>
                         <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque totam deleniti quos quam facere dolore optio delectus repellat vitae culpa nisi reprehenderit ducimus minus ea, quas quod. Optio, sequi aperiam?</p>
                     </div>
                 </div>
                 <div className="row">
                     <table className='table table-hover bg-primary text-center text-white'>
                         <thead className='bg-dark'>
                             <tr>
                             <th>slno</th>
                             <th>Name</th>
                             <th>email</th>
                             <th>city</th>
                             <th>phone No</th>
                             <th>Website</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 employees.length > 0 ?
                                 <React.Fragment>
                                     {
                                         employees.map(employee => {
                                             return(
                                                 <tr key={employee.id}>
                                                     <td>{employee.id}</td>
                                                     <td><Link to={`/employees/employee.id`}>{employee.name}</Link></td>
                                                     <td>{employee.email}</td>
                                                     <td>{employee.address.city}</td>
                                                     <td>{employee.phone}</td>
                                                     <td>{employee.website}</td>
                                                 </tr>
                                             )
                                         })
                                     }
                                 </React.Fragment>
                                 :null
                             }
                         </tbody>
                     </table>
                 </div>
             </div>
         </section>
     </React.Fragment>
    );
}
export default Employees;