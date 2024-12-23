import React from 'react'
import { useParams } from 'react-router-dom'
    // the useParams hook is used to access dynamic parameters from the URL of your application.
    // This is particularly useful when you want to retrieve values from the URL that you can then use to render components, 
    //  fetch data, or perform other logic based on those parameters.
function User() 
{
    const {UserId} = useParams();
  return (
    <div className='text-center'>User:{UserId}</div>
  )
}

export default User