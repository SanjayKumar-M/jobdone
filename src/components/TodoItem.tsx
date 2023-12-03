import React from 'react'

interface TodoList{
    id:number, name:string, isCompleted:boolean
}

interface TodoProps{
    todo:TodoList,
    toggle: (id: number)=>void
}

const TodoItem: React.FC<TodoProps> = ({todo, toggle}) => {
  return (
    <div>
        <li>
            <input type='checkbox' checked={todo.isCompleted}  onChange={()=>toggle(todo.id)} />
            <span style={{ textDecoration:todo.isCompleted  ? 'line-through' : 'none' }}>
        {todo.name}
      </span>
        </li>
    </div>
  )
}

export default TodoItem