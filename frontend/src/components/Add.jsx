import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'; // Correctly import useState

const Add = () => {
  const [course, setCourse] = useState({
    courseID: '',
    courseName: '',
    courseCategory: '',
    courseDescription: '',
    courseImage: '',
    courseFee: ''
  });

  const fetchValue = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const sendData = (event) => {
    console.log(course);
  };

  return (
    <div>
      <h2>New Course</h2>
      <TextField 
        id="standard-basic" 
        label="Course ID" 
        variant="standard" 
        name="CourseID" 
        onChange={fetchValue} 
      />  
      <br />
      <TextField 
        id="standard-basic" 
        label="Course Name" 
        variant="standard" 
        name="courseName" 
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Course Category" 
        variant="standard" 
        name="  courseCategory" 
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Course Description" 
        variant="standard" 
        name="courseDescription" 
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Course Image" 
        variant="standard" 
        name="courseImage" 
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Course Fee" 
        variant="standard" 
        name="courseFee" 
        onChange={fetchValue} 
      /> 
      <br /> 
      <br />
      <Button 
        sx={{ backgroundColor: '#C5705D' }} 
        variant="contained" 
        onClick={sendData}
      >
        Submit
      </Button>
    </div>
  );
};

export default Add;

