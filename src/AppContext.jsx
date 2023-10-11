import { useReducer, createContext } from "react";


const AppReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }

}


const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 450 },


    ]
}
