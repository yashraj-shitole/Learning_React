import React from 'react'

const StudentData = (prop) => {
  return (
    <div className='flex flex-col items-start'>
      <h1>Name: {prop.data.Name}</h1>
      <h1>Id: {prop.data.id}</h1>
      <h1>Class: {prop.data.class}</h1>
    </div>
  )
}

export default StudentData
