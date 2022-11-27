import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';


const Parent = () => {
    const { count } = useContext(COUNTER_CONTEXT);
    return (
        <div className=''>
            <div className='text-center bg-slate-100 w-3/12 mx-auto shadow-md rounded-md p-3 my-4'>
                <h1 className='text-blue-300'>Parent</h1>
                <div>
                    <h1 className='text-xl text-orange-600'>{count}</h1>
                </div>
                {/* <div>
                    <button
                        className='bg-red-500 rounded-md p-2 shadow-sm text-lg text-white'
                        onClick={() => setCount((prevState) => prevState - 1)}
                    >Decrement</button>
                    <button
                        className='bg-green-500 rounded-md p-2 shadow-sm text-lg ml-2'
                        onClick={() => setCount((prevState) => prevState + 1)}
                    >Increment</button>
                </div> */}
            </div>
            <Child />
        </div>
    );
};

export default Parent;