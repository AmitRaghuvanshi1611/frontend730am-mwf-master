import {useState } from 'react';
function New()
{
    const [count, setCount] = useState(0);
    return (
        <>
        <h1> New Component</h1>
        <h2> Count is : {count} </h2>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </>
    )
}
export default New