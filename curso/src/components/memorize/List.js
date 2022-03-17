import Item from "./Item";
import React,{memo} from "react";

const List = memo(({users}) =>{
    return (
        <ul>
           {users.map(user=>(
               <Item user ={user} key={user.id} />
           ))}
        </ul>
    )
})

export default List;