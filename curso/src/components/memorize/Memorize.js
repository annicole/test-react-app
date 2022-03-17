import List from "./List";
import React , {useState} from "react"

const initialUser = [
    {id:1,name: "Nicole"},
    {id:2,name : "Mario"}
]

function Memorize () {

    const [users, setUsers ]= useState(initialUser);
    const [text,setText] =useState("");


    const handleAdd = () =>{
        let newUser = {id:Math.random(),name:text};
        setUsers([...users,newUser])
    }

    const handleSearch = () =>{
        let newUser = {id:Math.random(),name:text};
        setUsers([...users,newUser])
    }

    return (
        <div>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
        <button  onClick={handleSearch()}>Search</button>
        <button  onClick={handleAdd()}>Add</button>
        <List users={users}/>
        </div>
    )
}

export default Memorize;