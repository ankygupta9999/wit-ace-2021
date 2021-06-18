import React from 'react';
import { Menubar } from 'primereact/menubar'
import {useStoreState, useStoreActions} from 'easy-peasy';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import {Redirect} from 'react-router-dom';





const MainNavigation = (props) => {

    const items = props.model;
    return(
        <div className="card">
            <Menubar
            model={items}            
            />
        </div>
    )


}

export default MainNavigation;