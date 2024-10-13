import React from 'react'

const Dashboard = () => {
    // const user=sessionStorage.getItem('username');  
    const user=localStorage.getItem('username'); 

  return (
    <>
    <div>Dashboard</div>
    <div>
       <h2> Welcome  </h2>
        </div>
    </>
  )
}

export default Dashboard