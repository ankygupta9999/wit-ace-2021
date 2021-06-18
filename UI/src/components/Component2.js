import React,{useState} from 'react'
import {Formik}
 from 'formik'
import * as Yup from 'yup';



const MyComponent2 = () => {

    const [model,setModel] = useState({
        value1: 'e',
        value2: 'e'
    })

    /*const formik = useFormik(
        {
            initialValues : model,
            onSubmit : (event) => {
                alert(JSON.stringify(event,null,2))
            },
            validationSchema : Yup.object({
                value1 : Yup.string().max(3,'must be 3 character in length at max'),
                value2 : Yup.string().max(3,'must be 3 character in length at max')
            })
        }
    )*/
    
    

    return(
        <Formik
            initialValues = {model}
            onSubmit = {(event) => {
                alert(JSON.stringify(event,null,2))
            }}
            validationSchema = {Yup.object({
                value1 : Yup.string().max(3,'must be 3 character in length at max'),
                value2 : Yup.string().max(3,'must be 3 character in length at max')
            })}
        >
        {   formik => (
            <form onSubmit={formik.handleSubmit}>
                <h1>My first component</h1>
                <label>first input</label>
                <input
                    type ='text' 
                    id = 'value1'
                    name = 'value1' 
                    value = {formik.values.value1} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.value1 && formik.errors.value1 ? (
                    <div>{formik.errors.value1}</div>
                    ) : null}
                <p/>         
                <label>second input</label>
                <input
                    type ='text' 
                    id = 'value1'
                    name = 'value2' 
                    value = {formik.values.value2} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.value2 && formik.errors.value2 ? (
                    <div>{formik.errors.value1}</div>
                    ) : null}
                <p/>
                <h2>First value : {formik.values.value1}</h2>
                <h2>First value : {formik.values.value2}</h2>
                <input type='submit' name = 'submitButton'></input>
        </form>
        )      
        }
        </Formik>
        
    );
}

export default MyComponent2;
