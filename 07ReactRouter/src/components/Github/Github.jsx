import React, { useEffect, useState } from 'react'
//Now we need show the followers and some basic things like image   
function Github() 
{

    const [data,setdata] = useState({});
    //we get github followers by calling APIand API call when this component is loaded 
    useEffect(() =>
        {
           fetch("https://api.github.com/users/Mahul777")
           .then((res) => res.json())
           .then((data) =>
            {
                console.log(data);
                setdata(data);
                
            })
        },[])
  return (
     //Now we need take out values from api 
    <div className='text-center bg-gray-500 text-white p-4 text-2xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='Github Picture' width={120} height={100} className='rounded-full' />
    </div>
  )
}

export default Github
