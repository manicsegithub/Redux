import { configureStore } from "@reduxjs/toolkit"
import  customerReducer from "../Redux_Slice/CustomerSlices"


const Store = configureStore({
    devTools:true,
    reducer: {
        //customers feild is create in store file, inside the customers feild contain the Reducer component
        customers: customerReducer
        
    }
})

export default Store;