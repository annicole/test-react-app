import React,{memo} from "react";

const Item = memo(({user}) =>{
    return (
        <li>
            {user.name}
        </li>
    )
})

export default Item;