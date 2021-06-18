import React,{useState} from 'react'



const MyComponent1 = () => {

    const [model,setModel] = useState({
        value1: 'e',
        value2: 'e'
    })

    const onChangeHandler = (event) => {
        const target = event.target
        setModel({value1:target.value,value2:target.value})
        
        console.log('sdasdad')
    }
    const onSubmitHandler = (event) => {
        alert(JSON.stringify(model))
    }

    return(
        
        <form onSubmit={onSubmitHandler}>
            <h1>My first component</h1>
            <label>first input</label>
            <input
                type ='text' 
                name = 'firstInput' 
                value = {model.value1} 
                onChange={e => setModel({...model,value1 : e.target.value})}
            />
            <p/>         
            <label>second input</label>
            <input
                type ='text' 
                name = 'firstInput' 
                value = {model.value2} 
                onChange={e => setModel({...model,value2 : e.target.value})}
            />
            <p/>
            <h2>First value : {model.value1}</h2>
            <h2>First value : {model.value2}</h2>
            <input type='submit' name = 'submitButton'></input>
        </form>
        
    );
}

export default MyComponent1;
