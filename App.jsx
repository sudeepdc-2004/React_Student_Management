import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sinfo from "./student";
import Qwerty from './StudentList';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';


function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'chikni', age: 21 },
    { id: 2, name: 'chameli', age: 22 },
  ]);


  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
  };


  return (
    <div>
      <h1>Student Management System</h1>
      <AddStudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;





// function App() {
//   const students = [
//     { id: 1, name: 'Munni', age: 21,marks: 55 },
//     { id: 2, name: 'Shila', age: 22,marks: 45 },
//     { id: 3, name: 'Rehana', age: 20,marks: 75 },
//     { id: 4, name: 'Rani', age: 23,marks: 65 },
//     { id: 5, name: 'Sita', age: 24,marks: 85 },
//     { id: 6, name: 'Gita', age: 22,marks: 35 },
//     { id: 7, name: 'Lata', age: 21,marks: 95 },
//   ];

//   return (
//     <div>
//       <h1>Student Management System</h1>
//       <Qwerty students={students} />
//     </div>
//   );
// }

// export default App;

// shows Student information and a table with student data

// export default function App() {
//   return (

//     <Sinfo />
//   );
// }


// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };
// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }


// import React from 'react';
// import Greeting from './Greeting'

// function App() {
//   return (
//     <div>
//       <Greeting name="Bahubali" />
//       <Greeting name="Katappa" />
//     </div>
//   );
// }

// export default App;
