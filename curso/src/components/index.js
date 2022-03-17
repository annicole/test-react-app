import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import {login} from '../utils/login';

const Index = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h2>Index</h2>
            <div>{JSON.stringify(user, null, 2)}</div>
            {user ? (
                <button onClick={()=>{
                    setUser(null);
                }}> logout</button>
            ) : (
            <button 
            onClick={
               async () =>{
                const user = await login();
                setUser(user);
               }}
            > login</button> 
            )}
        </div>
    );
};

export default Index;
