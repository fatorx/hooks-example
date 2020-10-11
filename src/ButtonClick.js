import React, { useState, useEffect } from 'react';

const ButtonClick = (props) => {
    let [count, setCount] = useState(0);   // count hook
    let [points, setPoints] = useState(0); // points hook

    /**
     *  
     */
    useEffect(() => {
        console.log('Will always be called');
    });

    useEffect(() => {
        console.log('Changed one of the items');
    }, [count, points]);

    useEffect(() => {
        console.log('Call useEffect for Count: ' + count);
        document.title = `${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('Call useEffect for  Points: ' + points);
        document.title = `${points} times`;
    }, [points]);

    useEffect(() => {
        console.log('Set after the exclusive hooks');
    }, [count, points]);

    return (
        <div>
            <p>You clicked count {count} times</p>
            <p>You clicked points {points} times</p>

            <button onClick={() => setCount(count + 1)}>
            Click Count
            </button>

            <br/>

            <button onClick={() => setPoints(points + 1)}>
            Click Points
            </button>
        </div>
    );
    
};

export default ButtonClick;
