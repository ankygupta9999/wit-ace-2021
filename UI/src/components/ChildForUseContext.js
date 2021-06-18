import  React,{useContext} from 'react'
import {myContext} from '../App'

 const  ChildForUseContext = () => {
    console.log("called baba called")
    const contextValue = useContext(myContext);
    console.log(contextValue)

    return(
        <div>
            <h2>{contextValue}</h2>
        </div>
    )
}

export default ChildForUseContext;