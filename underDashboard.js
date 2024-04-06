import React, { useState } from 'react';
import { undergraduate, Employee, data } from '../Utils/DummyDataSet';

function UnderDashboard() {
  const [selectedButton, setSelectedButton] = useState('UnderGraduate');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };


  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }


  const renderTable = () => {
    if (selectedButton === 'UnderGraduate') {
      return (
        <table className='w-full mt-7 shadow-md'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Nic</th>
              <th>Register Date</th>
              <th>University Id</th>
            </tr>
          </thead>
          <tbody>
          {undergraduate.map((student) => (
            (localStorage.getItem('email') === data.email) ? (
              <tr key={student.id}>
                <td className='text-center p-5 pt-8'>{student.id}</td>
                <td className='text-center p-5 pt-8'>{student.Name}</td>
                <td className='text-center p-5 pt-8'>{student.Nic}</td>
                <td className='text-center p-5 pt-8'>{student.RegisterDate}</td>
                <td className='text-center p-5 pt-8'>{student.U_id}</td>
              </tr>
            ) : null
          ))}
          </tbody>
        </table>
      );
    } else if (selectedButton === 'Employee') {
      return (
        <table className='w-full mt-7 shadow-md'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Register Number</th>
              <th>Register Date</th>
              <th>Business Register</th>
            </tr>
          </thead>
          <tbody>
          {Employee.map((employee) => (
            (localStorage.getItem('email') === data.email) ? (
              <tr className='' key={employee.id} >
                <td className='text-center p-6 pt-7'>{employee.id}</td>
                <td className='text-center p-6 pt-7'>{employee.Name}</td>
                <td className='text-center p-6 pt-7'>{employee.R_num}</td>
                <td className='text-center p-6 pt-7'>{employee.R_date}</td>
                <td className='text-center p-6 pt-7'>{employee.BR_id}</td>
              </tr>
            ) : null
          ))}
          </tbody>
        </table>
      );
    }
    return null;
  };

  const DisplayText = () => {
    if (selectedButton === 'UnderGraduate') {
      return (
        <h3 className='text-gray-800'> Most Applied Jobs Categories </h3>
      );
    } else if (selectedButton === 'Employee') {
      return (
        <h3 className='text-gray-800'> Most Seeked Job Catagories </h3>
      );
    }
    return null;
  };

  return (
    <div className="p-6 md:p-10 text-gray-800">
      <div className='container mx-auto my-5'>
        <div className='flex flex-wrap h-[800px] my-2'>
          <div className='w-1/3 border border-gray-700 bg-gray-400 '>
            <ul className='mt-36'>
              <li className={` mt-3 border border-gray-800 ${selectedButton === 'UnderGraduate' ? 'bg-sky-400 text-white' : 'bg-white text-sky-400'}`}>
                <button className='border border-gray-800 p-4 w-full' onClick={() => handleButtonClick('UnderGraduate')}>UnderGraduate</button>
              </li>
              <li className={`  mt-3 border border-gray-800 ${selectedButton === 'Employee' ? 'bg-sky-400 text-white' : 'bg-white text-sky-400'}`}>
                <button className='p-4 w-full' onClick={() => handleButtonClick('Employee')}>Employee</button>
              </li>
            </ul>
          </div>
          <div className='w-2/3 border border-gray-600'>
          <div className='flex flex-wrap my-2 h-[200px] mt-6 mx-3 
          '>
          
            <div className='w-1/3 my-5 p-6 bg-white shadow-xl px-3 text-center mx-auto border border-gray-800'>
              <h1 className='text-sky-500 text-5xl px-4 py-3 '> 2,112</h1>
              <h3 className='text-gray-800'> Users Registered </h3>
            </div>
            <div className='w-1/3 p-6 my-5 bg-white shadow-xl px-3   text-center mx-auto border border-gray-800'>
            <h1 className='text-sky-500 text-xl px-4'> Developer</h1>
            <h1 className='text-sky-500 text-xl px-4'> Graphic Designer</h1>
              {DisplayText()}
            </div>
            <button class="bg-blue-500 h-[40px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer" onClick={()=> logout() }>LogOut</button>
          </div>
            {renderTable()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnderDashboard;
