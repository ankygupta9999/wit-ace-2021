import React from 'react'
import {useForm} from 'react-hook-form'


const ReactHookForms = () => {

    const {register, errors, handleSubmit} = useForm();

    const SubmitFunction = () =>
    {

    }

    return(
        <form onSubmit = {handleSubmit(SubmitFunction)}>
            <input type ='text'></input>
            <input type = 'text'></input>
            <input type = 'text'></input>
            <input type = 'text'></input>
            <button type='submit'></button>
        </form>
    )
}


export default ReactHookForms;