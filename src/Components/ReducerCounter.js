import React, { useReducer } from 'react';

const ReducerCounter = () => {
    const initialState = 0;
    const reducerFunction = (prevstate, action) => {
        console.log(action);
        if (action.type === 'INCREMENT') {
            return prevstate + 1;
        } else if (action.type === "DECREMENT") {
            return prevstate - 1;
        }
    }
    const [state, dispatch] = useReducer(reducerFunction, initialState);


    return (
        <div>
            <div className='text-center bg-slate-100 w-3/12 mx-auto shadow-md rounded-md p-3 my-4'>
                <h1 className="text-blue-300">Reducer_Counter</h1>
                <div>
                    <h1 className="text-xl text-teal-600">{state}</h1>
                </div>
                <div>
                    <button
                        className='bg-rose-500 rounded-md p-2 shadow-sm text-lg text-white'
                        onClick={() => dispatch({ type: 'DECREMENT' })}
                    >Decrement</button>
                    <button
                        className='bg-lime-500 rounded-md p-2 shadow-sm text-lg ml-2'
                        onClick={() => dispatch({ type: "INCREMENT" })}
                    >Increment</button>
                </div>
            </div>
        </div>
    );
};

export default ReducerCounter;