import React ,{useContext} from "react";
import { UserContext } from "../UserContext";

const About = () =>{
    const {user,setUser} = useContext(UserContext);
    return(
        <>
        <h1>About</h1>
        <div>{JSON.stringify(user,null,2)}</div>
        </>
        
    );
};

export default About;
