import React from 'react';
import { useSelector } from 'react-redux';
import { deleteCustomer } from '../Redux_Slice/CustomerSlices';
import { useDispatch } from 'react-redux';

function CustomerView() { //function CustomerView(function CustomerView()) //before use dispatch
    //Use the useSelector hook
    const customerInput = useSelector((state) => state.customers); //customers link to customerSlices file as name: customers

    //create the dispatch function 
    const dispatch = useDispatch();

    //function delete the value 
    function deleteHandle(index) {
        dispatch(deleteCustomer(index))
    }

    return ( <>
       <h3>Customer List</h3>
       <ul style={{}}>
        {
            customerInput.map((customer, index) => <li>{customer} <button onClick={() => deleteHandle(index)}>Delete</button></li>)
        }
       </ul>
    </> );
}

export default CustomerView;