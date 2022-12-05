import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';
import "./styles.css"

interface Props{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({todos, setTodos}:Props) => {
  return (
    <div className='todos'>
        {todos.map((todo)=>(
            <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  )
}
