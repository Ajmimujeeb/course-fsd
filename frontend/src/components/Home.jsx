import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';




const Home = () => {
  const [course, setCourse] = useState([]);
  useEffect(()=>{
     axios.get('http://localhost:3000/course').then((res)=>{
      setCourse(res.data);
     })
  },[])
  function deleteCourse(p)
  {
    axios.delete('http://localhost:3000/course/remove/'+p).then((res)=>{
      alert('Data deleted');

    }).catch((error)=>{
       console.log(error)
    })
  }

// const courses=[
//   {
//     courseId: "101",
//     courseName: "Full Stack Development",
//     courseCategory: "Technology",
//     courseDescription: "Comprehensive course covering front-end and back-end technologies",
//     courseImage: "https://thumbs.dreamstime.com/b/fullstack-icon-computer-221192613.jpg?w=992",
//     courseFee: "50000"
//   },
//   {
//     courseId: "102",
//     courseName: "Data Science",
//     courseCategory: "Data",
//     courseDescription: "Learn data analysis, visualization, and machine learning techniques",
//     courseImage: "https://static.vecteezy.com/system/resources/previews/017/616/997/non_2x/data-science-glyph-two-color-icon-vector.jpg",
//     courseFee: "60000"
//   },
//   {
//     courseId: "103",
//     courseName: "Digital Marketing",
//     courseCategory: "Marketing",
//     courseDescription: "Master SEO, social media, and online advertising strategies",
//     courseImage: "https://www.pngitem.com/pimgs/m/75-757749_marketing-icon-png-flat-marketing-icon-png-transparent.png",
//     courseFee: "400 USD"
//   }
// ]
  

  return (
    <div><br /><br /><br />
    <Grid container spacing={2} >
      {course.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.courseId}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%',width:'300px' }}>
            <CardMedia
              sx={{ height: 250 }}
              image={item.courseImage} // Dynamically set image for each  course
              title={item.courseName}
            />
            <CardContent sx={{flex: '1 0 auto'}}>
              <Typography gutterBottom variant="h5" component="div">
                {item.courseName}
              </Typography>
              <Typography variant="body2">
                <strong>Category:</strong> {item.courseCategory}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Description:</strong> {item.courseDescription}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Fee:</strong> {item.courseFee}
              </Typography>
              <Typography><br />
                <Button sx={{backgroundColor:'#C62E2E',color:'white'}}>Edit</Button> <br/>
                <br/>
                <Button sx={{backgroundColor:'black',color:'white'}} onClick={()=>deleteCourse(item._id)}>Delete</Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
 
  </div>
  )
}

export default Home