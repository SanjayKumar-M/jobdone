import React from 'react'

// creating custom type for props for heading like: TodoList
type Head = {title:string}

const Heading = ({title}:Head) => {
  return (
    <div>
        {title}
    </div>
  )
}

export default Heading