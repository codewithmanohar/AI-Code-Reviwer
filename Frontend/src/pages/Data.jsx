import React, { useEffect, useState } from 'react'

const Data = () => {
    const [data , setData] = useState([]);
    const [Branch , setBranch] = useState("");
    const [count , setCount] = useState(0);
    const API = "https://ai-code-reviwer.onrender.com/api/info";
    

    const handleResponse = async () => {
        const response = await fetch(API);
        const result = await response.json();
        setData([...result.data]);
        console.log(result);
    }
   useEffect(() => {
    handleResponse();
   },[])

  return (
    <>
        <div>
            <div className='flex justify-center gap-10 p-10'>
               
                <button onClick={() => setBranch("All")} className='btn px-10'>All</button> 
                <button onClick={() => setBranch("CSE")} className='btn px-10'>CSE</button> 
                <button onClick={() => setBranch("ME")} className='btn px-10'>ME</button>
                <button onClick={() => setBranch("EE")} className='btn px-10'>EE</button>
                <button onClick={() => setBranch("Civil")} className='btn px-10'>Civil</button>
                <button onClick={() => setBranch("AI")} className='btn px-10'>AI</button>
                
            </div>
            
            <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border shadow-md rounded-lg">
          <thead className="bg-gray-900">
            <tr>
              <th className="py-2 px-4 border ">ID</th>
              <th className="py-2 px-4 border ">First name</th>
              <th className="py-2 px-4 border ">Last name</th>
              <th className="py-2 px-4 border ">Email</th>
              <th className="py-2 px-4 border ">Branch</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              
                Branch === "All" ? (
                  <tr key={index} >
                      <td className="py-2 px-4 border text-center">{user.id}</td>
                      <td className="py-2 px-4 border text-center">{user.first_name}</td>
                      <td className="py-2 px-4 border text-center">{user.last_name}</td>
                      <td className="py-2 px-4 border text-center">{user.email}</td>
                      <td className="py-2 px-4 border text-center">{user.Branch}</td>
                    </tr>
                ):(
                  Branch === user.Branch && (
                    <tr key={index} >
                      <td className="py-2 px-4 border text-center">{user.id}</td>
                      <td className="py-2 px-4 border text-center">{user.first_name}</td>
                      <td className="py-2 px-4 border text-center">{user.last_name}</td>
                      <td className="py-2 px-4 border text-center">{user.email}</td>
                      <td className="py-2 px-4 border text-center">{user.Branch}</td>
                    </tr>
                    )
                )
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    </>
  )
}

export default Data