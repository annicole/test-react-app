import React, { useMemo, useState } from "react";
import {useFetch} from '../utils/useFetch'

function computedLongestWorld(array){
    if(!array){
        return [];
    }

    let longestWord = "";

    array.forEach(sentence => {
        sentence.split(" ").foreach(word=>{
            if(word.length > longestWord.length){
                longestWord = word;
            }
        })
    });
}


const Counter = () =>{
    const [count ,setCount] = useState(0);
    const {data} = useFetch('https://api.kanye.rest/');


    const longestWord = useMemo(()=> computedLongestWorld(data),[data])

    return (
        <>
            <div>Count : {count}</div>
            <button onClick={()=> setCount(count + 1)}>Increment </button>
            <div>{computedLongestWorld()}</div>
        </>
    );
}

export default Counter;