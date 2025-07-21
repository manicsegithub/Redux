import { createSlice } from "@reduxjs/toolkit";

const initialState = []; //The initial state is refer from the CustomerView page, initial value is null

export const customerSlice = createSlice({
    name : 'customers', //This name is shown in redux tool extension in chrome browser 
    initialState: initialState,
    reducers: {
        addCustomer(state,action){ //the addCustomer is eventhandler in Customer_add file   
            state.push(action.payload) //payload is inbuild method
        },
        deleteCustomer(state,action){ //It is used to delete the value from the list 
            const deleteIndex = action.payload;
            return state.filter((value, index) => index !== deleteIndex) //Check the index position 
        }
    }
})

//The addCustomer function is taken from reducer feild 
export const { addCustomer, deleteCustomer } = customerSlice.actions; //actions is inbuild method
export default customerSlice.reducer; //reducers is also a inbuild method 