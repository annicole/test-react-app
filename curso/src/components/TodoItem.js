import React from "react";

const TodoItem = ({todo,toggleTodo}) =>{
    const {id,task,completed} = todo;

    const handleOnClick = () =>{
        toggleTodo(id);
    }

return(
    <li>
        <input type="checkbox" checked={completed} onChange={handleOnClick}/>
        {task}</li>
);
}

export default TodoItem;