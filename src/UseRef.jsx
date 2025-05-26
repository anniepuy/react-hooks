/*
App Name: React Hooks Example
Author: Ann Hagan
Date: 2025-05-26
Description: A simple React application demonstrating the use of hooks for state management and side effects.
Page: App.jsx
*/
import { useRef } from "react";

const UseRefComponent = () => {
    const textInput = useRef();
    const triggerHandler = () => {
        console.log(textInput)
    }
    return(
        <>
            <h1>form:</h1>
            <input type="text" ref={textInput} />
            <button onClick={triggerHandler}>Trigger</button>
        </>
    )
}
export default UseRefComponent;