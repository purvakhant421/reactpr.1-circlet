import React, { useState } from 'react';
import './App.css';

const employeeData = [
  {
    id: 1,
    name: 'Shreedev',
    gender: 'Male',
    age: 28,
    salary: 60000,
  },
  {
    id: 2,
    name: 'Purva',
    gender: 'Female',
    age: 24,
    salary: 30000,
  },
  {
    id: 3,
    name: 'Viral',
    gender: 'Male',
    age: 17,
    salary: 50000,
  },
  {
    id: 4,
    name: 'Dhavan',
    gender: 'Male',
    age: 32,
    salary: 50000,
  },
  {
    id: 5,
    name: 'Sharan',
    gender: 'Female',
    age: 18,
    salary: 7000,
  },
  {
    id: 6,
    name: 'Herik',
    gender: 'Male',
    age: 25,
    salary: 50000,
  },
  {
    id: 7,
    name: 'Nirupa',
    gender: 'Female',
    age: 47,
    salary: 90000,
  },
  {
    id: 8,
    name: 'Prince',
    gender: 'Male',
    age: 20,
    salary: 40000,
  },
  {
    id: 9,
    name: 'Khushbu',
    gender: 'Female',
    age: 23,
    salary: 30000,
  },
  {
    id: 10,
    name: 'Shyam',
    gender: 'Male',
    age: 27,
    salary: 100000,
  },
  {
    id: 11,
    name: 'Niyati',
    gender: 'Female',
    age: 18,
    salary: 60000,
  },
  {
    id: 12,
    name: 'Urja',
    gender: 'Female',
    age: 17,
    salary: 50000,
  },
  {
    id: 13,
    name: 'Dharuvik',
    gender: 'Male',
    age: 31,
    salary: 60000,
  },
  {
    id: 14,
    name: 'Nirali',
    gender: 'Female',
    age: 22,
    salary: 20000,
  },
  {
    id: 15,
    name: 'Vallbh',
    gender: 'Male',
    age: 45,
    salary: 50000,
  },
  {
    id: 16,
    name: 'Tulsi',
    gender: 'Female',
    age: 19,
    salary: 30000,
  },
  {
    id: 17,
    name: 'Shudir',
    gender: 'Male',
    age: 32,
    salary: 50000,
  },
  {
    id: 18,
    name: 'Bhumi',
    gender: 'Female',
    age: 30,
    salary: 20000,
  },
  {
    id: 19,
    name: 'Siddharth',
    gender: 'Male',
    age: 28,
    salary: 90000,
  },
  {
    id: 20,
    name: 'Savan',
    gender: 'Male',
    age: 25,
    salary: 50000,
  },
];

function App() {
  const [filteredEmployees, setFilteredEmployees] = useState(employeeData);

  const filterEmployees = (condition) => {
    const filtered = employeeData.filter(condition);
    setFilteredEmployees(filtered);
  };

  const increaseSalary = (salary) => {
    return Math.round(salary * 1.10);
  };

  return (
    <div className="App">
      <button onClick={() => filterEmployees(employee => employee.salary > 50000)}>
        Display Employees Above 50000 RS
      </button>
      <button onClick={() => filterEmployees(employee => employee.gender === 'Female')}>
        Display Female Employees
      </button>
      <button onClick={() => filterEmployees(employee => employee.age > 30)}>
        Display Employees Age > 30
      </button>
      <button onClick={() => filterEmployees(employee => increaseSalary(employee.salary) > 50000 && employee.age > 25)}>
        Display Employees: Salary Increase + Age > 25
      </button>
      <button onClick={() => filterEmployees(employee => employee.gender === 'Female' && employee.salary >= 20000 && employee.salary <= 30000)}>
        Display Female Employees: Salary 20k - 30k
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
