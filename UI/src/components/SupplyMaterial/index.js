import React,{useState,useEffect,useRef} from 'react';
import {useForm} from 'react-hook-form';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primeflex/primeflex.css';
import { InputTextarea } from 'primereact/inputtextarea';
import {saveProduct} from '../../services/product-save-service';
import { Toast } from 'primereact/toast';



const SupplyMaterial = () => {
    const toast = useRef(null);
    const {register,handleSubmit,errors} = useForm();

    //const [searchState, searchActions] = useSearchComponentStore();
    

    useEffect(() => {
        
    }, []);


    const Save = (data) =>{
        console.log(data);
        const result = saveProduct(data);
        showSuccess();
    }

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success Message', detail:'Save successful', life: 3000});
    }

    return(
        <div className="card" style={{width:500, marginTop:10}}>
            <Toast ref={toast} />
            <form onSubmit = {handleSubmit(Save)}>
                <div className="p-fluid p-formgrid p-grid" style={{marginLeft: 50}}>
                    <div className="p-field p-col">
                        <label htmlFor="suppierId">Supplier Id</label>
                        <InputText 
                        id="suppierId"
                        type="text"
                        name="supplierId"
                        ref={register}
                        />
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="material">Material Type</label>
                        <InputText 
                        id="material" 
                        type="text"
                        name="rawMaterial"
                        ref={register}
                        />
                    </div>
                </div>
                <div className="p-fluid p-formgrid p-grid" style={{marginLeft: 50}}>
                    <div className="p-field p-col">
                        <label htmlFor="price">Price</label>
                        <InputText 
                        id="price"
                        name="price"
                        ref={register}
                        />
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="unit">Unit</label>
                        <InputText 
                        id="unit" 
                        type="text"
                        name="unit"
                        ref={register}
                        />
                    </div>
                </div>
                <div className="p-fluid p-formgrid p-grid" style={{marginLeft: 50}}>
                    <div className="p-field p-col">
                        <label htmlFor="carbonFootprint">Carbon Footprint</label>
                        <InputText 
                        id="carbonFootprint"
                        name="carbonFootPrint"
                        ref={register}
                        />
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="details">Detail</label>
                        <InputTextarea 
                        id="details" 
                        type="text"
                        name="details"
                        ref={register}
                        />
                    </div>
                </div>
                                   
                
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

export default SupplyMaterial;