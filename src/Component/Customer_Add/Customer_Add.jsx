import React, { use, useState } from 'react';
import CustomerView from '../Customer_View/Customer_View';
import { addCustomer as addCustomerAction } from '../Redux_Slice/CustomerSlices';
import { useDispatch } from 'react-redux';

function CustomerAdd() {
    const [input, setInput] = useState("");
    
    //Get the input from users and then pass throw the array method 
    //const [customerInput, setCustomerInput] = useState([]); //we can replace by dispatch method

    const dispatch = useDispatch();

    //create the function check the value 
    function addCustomer(){
        if(input){
            //setCustomerInput((previousState) => [...previousState, input]) //replace by addCustomerAction
            //console.log(customerInput);

            dispatch(addCustomerAction(input)) //dispatch is used to push the value 

            //Clear the input feild 
            setInput(""); //Update the input as input after insert the value 
        }
    }

    return ( 
    <>
      <div style={{fontFamily:"cursive",fontWeight:"bold"}}>
      <h3 style={{fontSize:"32px"}}>Add New Customer</h3>
      <input type = "text" value = {input} style={{height:"30px"}} 
      onChange={(e) => setInput(e.target.value)}/> 
      <button onClick={addCustomer}>Add</button>
      </div>

      {/* <CustomerView customerInput = {customerInput}/> */}
    </>
    );
}

export default CustomerAdd;