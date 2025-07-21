import React from 'react';
import CustomerAdd from '../Component/Customer_Add/Customer_Add';
import { Provider } from 'react-redux';
import Store from '../Component/Redux_Store/Redux_Strore';
import CustomerView from '../Component/Customer_View/Customer_View';


function Layout() {
    return (<>
    <Provider store = { Store }>    
       <CustomerAdd />
       <CustomerView />
       
    </Provider>
    </>);
}

export default Layout;