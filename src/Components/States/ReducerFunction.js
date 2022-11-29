import { actionTypes } from "./ActionTypes";

export const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    gender: '',
    education: "",
    quantity: 0,
    feedback: "",
    term: false,
};

export const reducerFunction = (state, action) => {
    switch (action.type) {
        case (actionTypes.INPUT):
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case (actionTypes.TOGGLE):
            return {
                ...state,
                term: !state.term,
            }
        case (actionTypes.INCREMENT):
            return {
                ...state,
                quantity: state.quantity + 1,
            }
        case (actionTypes.DECREMENT):
            return {
                ...state,
                quantity: state.quantity - 1,
            }
        default:
            return { ...state }
    }

}