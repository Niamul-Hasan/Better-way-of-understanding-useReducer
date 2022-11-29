import React, { useReducer } from 'react';
import { initialState, reducerFunction } from './States/ReducerFunction';

const ComplexForm = () => {

    const [state, dispatch] = useReducer(reducerFunction, initialState)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    }
    return (
        <div className='w-1/2 mx-auto shadow-lg p-5 my-3 bg-orange-100'>
            <h1 className='text-blue-200 text-center mb-2'>Sample Form</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-2'>
                <div>
                    <label>
                        <h1>Firstname</h1>
                    </label>
                    <input type="text" name='firstname' className='border-2 border-blue-300'
                        onBlur={(e) => dispatch({
                            type: "INPUT",
                            payload: { name: e.target.name, value: e.target.value }
                        })}
                    />
                </div>
                <div>
                    <label>
                        <h1>Lastname</h1>
                    </label>
                    <input type="text" name='lastname' className='border-2 border-blue-300'
                        onBlur={(e) => dispatch({
                            type: "INPUT",
                            payload: { name: e.target.name, value: e.target.value }
                        })}
                    />
                </div>
                <div>
                    <label>
                        <h1>Email</h1>
                    </label>
                    <input type="email" name='email' className='border-2 border-blue-300'
                        onBlur={(e) => dispatch({
                            type: "INPUT",
                            payload: { name: e.target.name, value: e.target.value }
                        })}
                    />
                </div>

                {/* radio button  start */}
                <div>
                    <h1>Gender</h1>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-row gap-1'>
                            <input type="radio" name='gender' id='male' value='male'
                                onClick={(e) => dispatch({
                                    type: "INPUT",
                                    payload: { name: e.target.name, value: e.target.value }
                                })}
                            />
                            <label>
                                <h1>Male</h1>
                            </label>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <input type="radio" name='gender' id='female' value='female'
                                onClick={(e) => dispatch({
                                    type: "INPUT",
                                    payload: { name: e.target.name, value: e.target.value }
                                })}
                            />
                            <label>
                                <h1>Female</h1>
                            </label>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <input type="radio" name='gender' id='other' value='other'
                                onClick={(e) => dispatch({
                                    type: "INPUT",
                                    payload: { name: e.target.name, value: e.target.value }
                                })}
                            />
                            <label>
                                <h1>Other</h1>
                            </label>
                        </div>
                    </div>
                </div>
                {/* radio button end  */}
                {/* ----------------------------  */}

                {/* drop down button start  */}

                <div>
                    <label htmlFor="education">
                        <h1>Education</h1>
                    </label>
                    <select name="education" id="education" className='border-2'
                        onChange={(e) => dispatch({
                            type: "INPUT",
                            payload: { name: e.target.name, value: e.target.value }
                        })}
                    >
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                        <option value="Graduate">Graduate</option>
                        <option value="UnderGraduate">Under Graduate</option>
                    </select>
                </div>
                {/* drop down end  */}

                <div>
                    <h1>Quantity</h1>
                    <button type='button' className='bg-rose-500 text-white text-lg px-2 rounded-sm mr-2'
                        onClick={() => dispatch({ type: "DECREMENT" })}
                    >
                        -
                    </button>
                    <input type="number" name='quantity' className='border-2 border-black text-lg text-center' value={state.quantity} />
                    <button type='button' className='bg-green-500 text-white text-lg px-2 rounded-sm ml-2'
                        onClick={() => dispatch({ type: "INCREMENT" })}
                    >
                        +
                    </button>
                </div>

                <div>
                    <div>
                        <label htmlFor="feedback">
                            <h1>Feed Back</h1>
                        </label>
                        <textarea name="feedback" id="feedback" cols="30" rows="5" className='border-2 border-blue-300'
                            onBlur={(e) => dispatch({
                                type: "INPUT",
                                payload: { name: e.target.name, value: e.target.value }
                            })}
                        ></textarea>
                    </div>

                    <div className='mt-3 flex flex-row '>
                        <div>
                            <input type='checkbox' onClick={() => dispatch({ type: "TOGGLE" })} />
                            <span className={`ml-2 text-sm ${state.term ? 'text-lime-600' : 'text-red-500'}`}>I Am Agree With The Terms and Conditions</span>
                        </div>

                        <div>
                            <button type="submit" disabled={!state.term}
                                className={`${state.term ? 'bg-blue-500' : 'bg-gray-500'} text-white text-lg px-2 rounded-sm`}>
                                Submit </button>
                        </div>

                    </div>

                </div>

            </form>

        </div>
    );
};

export default ComplexForm;