import React, { useState } from 'react';


function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [marks, setMarks] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      onAddStudent({ name, age: parseInt(age), marks: parseInt(marks) || 0 });
      setName('');
      setAge('');
      setMarks
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        required
      />
      <pre> 
      <button type="submit">Add Student</button>
      </pre>
    </form>
  );
}


export default AddStudentForm;
