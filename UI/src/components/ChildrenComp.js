import React from 'react'

const ChildrenComp = (props) => {

    return(
        <div>
            <h1>This is children component</h1>
            {props.children}
        </div>
    );

}

export default ChildrenComp;