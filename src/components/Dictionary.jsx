// import statement indicates that you import get something from others

import {useState} from 'react';

export default function Dictionary() {
    const [word, setWord] = useState();

    return (
        <>
            <input 
                type='text' 
                onChange={(e) => {
                    setWord(e.target.value);
            }}      
        />
            <h1>Let's get the definition for {word}</h1>
        
        </>
    )

}