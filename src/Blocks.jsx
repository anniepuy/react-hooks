/*
App Name: React Hooks Example
Author: Ann Hagan
Date: 2025-05-26
Description: A demonstration of useEffect cleanup.
Page: Blocks.jsx
*/

import {useEffect} from 'react';

const BlocksComponent = () => {
    useEffect(() => {
        console.log('Blocks created.')

        return () => {
            console.log('Blocks destroyed.')
        }
    });

    return (
        <>
            <div
                style={{
                    background: 'red',
                    color: 'white',
                    margin: '10px',
                    padding: '20px'
                }}>
                I am a block.
            </div>
        </>
    );
}

export default BlocksComponent;
