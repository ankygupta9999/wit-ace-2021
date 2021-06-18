import React,{useState} from 'react'


const HookComponentObject = () => {

    const [employee,setEmployee] = useState(
        {
            firstname : "",
            lastname : ""
        }        
    )

    console.log("i am called");

    return(

        <div>
            <form>
                <input 
                    type="text" 
                    value={employee.firstname} 
                    onChange = {e => setEmployee({...employee,firstname : e.target.value})}
                />
                <input 
                    type="text" 
                    value={employee.lastname} 
                    onChange = {(e) => setEmployee({...employee,lastname : e.target.value})}
                />
                <h2>First Name : {employee.firstname}</h2>
                <h2>Last Name : {employee.lastname}</h2>
            </form>
        </div>

    );
}


export default HookComponentObject;