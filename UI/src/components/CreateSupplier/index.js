import React,{useState,useEffect,useRef} from 'react';
import {useForm} from 'react-hook-form';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {saveSupplier} from '../../services/supplier-save-service';
import { Toast } from 'primereact/toast';



const CreateSupplier = () => {
    const toast = useRef(null);
    const {register,handleSubmit,errors} = useForm();

    
    const Save = (data) =>{
        const result = saveSupplier(data);
        showSuccess();
    }

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success Message', detail:'Save successful', life: 3000});
    }

    
    return(
        <div className="card" style={{marginTop: 50},{height:200},{width:100}}>
            <Toast ref={toast} />
            <form onSubmit = {handleSubmit(Save)}>
                <h5
                    style={{marginTop: 50},{marginLeft: 50}}
                >Supplier Name</h5>                
                <InputText                     
                    style={{marginLeft: 50}}
                    name="name"
                    ref={register}
                />

                <h5
                    style={{marginTop: 50},{marginLeft: 50}}
                >Phone Number</h5>                
                <InputText                     
                    style={{marginLeft: 50}}
                    name="phoneNumber"
                    ref={register}
                />

                <h5
                    style={{marginTop: 50},{marginLeft: 50}}
                >Email</h5>                
                <InputText                     
                    style={{marginLeft: 50}}
                    name="email"
                    ref={register}
                />
                    
                
                <Button 
                    type = "Submit" 
                    label="Save" 
                    className="p-button-raised" 
                    style={{marginTop: 50, marginLeft: 50}}
                />  

                            

            </form>
            
        </div>
    )
};

export default CreateSupplier;