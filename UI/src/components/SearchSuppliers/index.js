import React,{useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import useSearchComponentStore from '../../stores/component/search-store';



const SearchSuppliers = () => {
    const {register,handleSubmit,errors} = useForm();
    const [value, setValue] = useState('');
    const [products, setProducts] = useState([]);

    const [searchState, searchActions] = useSearchComponentStore();
    console.log("called");
    console.log(searchState);

    useEffect(() => {
        const loadSearchResult = async () => {
            try {
                await searchActions.getSearchResults();
            } catch (error_) {
                console.log(error_.message);
            }    
        };
        loadSearchResult();
    }, [searchActions]);


    const Search = (data) =>{
        console.log(data);
        searchActions.getSearchResults(data.product);
    }

    return(
        <div className="card" style={{marginTop: 50}}>
            <form onSubmit = {handleSubmit(Search)}>
                
                <span className="p-input-icon-left" >
                    <i className="pi pi-search" />
                    <InputText                         
                        placeholder="Search" 
                        style={{marginRight: 10}}
                        name="product"
                        ref={register}
                    />
                </span>
                <Button type = "Submit" label="Search" className="p-button-raised" />  
                <h3 style={{marginTop: 50}}>Internal Data</h3>
                <div className="card">
                    <DataTable value={searchState.searchResult[0]} scrollable scrollHeight="200px">
                        <Column field="supplierId" header="Supplier ID"></Column>
                        <Column field="rawMaterial" header="Product"></Column>
                        <Column field="varient" header="Varient"></Column>
                        <Column field="unit" header="Unit"></Column>
                        <Column field="price" header="Price"></Column>
                        <Column field="carbonFootPrint" header="Carbon FootPrint"></Column>
                    </DataTable>
                </div> 

                <h3 style={{marginTop: 50}}>External Data</h3>
                <div className="card">
                    <DataTable value={searchState.watsonSearchResult[0]} scrollable scrollHeight="200px">
                        <Column field="supplier_name" header="Supplier Name"></Column>
                        <Column field="raw_material" header="Product"></Column>
                        <Column field="units" header="Unit"></Column>
                        <Column field="price" header="Price"></Column>
                        <Column field="sup_area" header="Location"></Column>
                    </DataTable>
                </div>             

            </form>
            
        </div>
    )
};

export default SearchSuppliers;