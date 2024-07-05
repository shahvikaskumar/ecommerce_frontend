import React, { useEffect, useState } from 'react';
import ProductCreate from './product-crud/product-create';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import {Button} from 'react-bootstrap';
import { Deleteproduct, Getallproduct, setmodalshow } from '../../../redux/slice/productslice';
import Loading from '../../../component/loading/loading';
import { showtoast } from '../../../redux/slice/toastslice';


export const Products = () => {
  const [search, setsearch] = useState('');
  const { products , loading } = useSelector((state) => state.product);
  const [filproduct, setfillproduct] = useState([]);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Getallproduct());    
  },[dispatch]);
  
useEffect(() => {
  const result = products.filter((product) => {
      return product.pname.toLowerCase().match(search.toLowerCase());
  });

  setfillproduct(result);
},[ products, search ]);

const handledelete = (product) => {
  const confirmMessage = `Are you sure you want to delete the product "${product.pname}" with the following details?\n\n
                          Name: ${product.pname}\n
                          Price: ${product.price}\n
                          Description: ${product.pdesc}`;

    if (window.confirm(confirmMessage)) {
      dispatch(Deleteproduct({pid:product._id, token:token, showtoast:showtoast}));

    }
    
  };

  const columns = [
    {
      name:"Image",
      selector:(row) => (
        <img className='my-2' 
        src={row.image} 
        alt={row.pname} 
        style={{ width: '80px', height: '100px', objectFit: 'cover' }}
      />
      ),
    },
    
    {
      name:"Brand",
      selector:(row) => row.brand,
      sortable:true
    },
    {
      name:"Item Name",
      selector:(row) => row.pname,
      sortable:true
    },
    {
      name:"Categories",
      selector:(row) => row.cate,
      sortable:true
    },
    {
      name:"Subcategories",
      selector:(row) => row.subcate,
      sortable:true
    },
    {
      name:"Featured",
      cell: (row) => (
        <input className='justify-content-center'
          type="checkbox" 
          checked={row.featured} 
          readOnly 
        />
      ),
      sortable: true
    },
    
    {
      name:"Action",
      cell:row => 
        <>
        <button className='btn btn-primary mx-2' style={{minWidth:'80px'}} onClick={() => console.log(products)}>Edit</button>
        <button className='btn btn-danger mx-2' style={{minWidth:'80px'}} onClick={() => handledelete(row)}>Delete</button>
        </>
    },
    
  ]  

  return (
    <>
      {loading && <Loading /> }         
      <ProductCreate />
      <DataTable className='px-4 justify-content-center' title="Product List"
        columns={columns} 
        data={filproduct} 
        pagination 
        fixedHeader
        fixedHeaderScrollHeight='700px'
        selectableRows
        highlightOnHover
        selectableRowsHighlight        
        subHeader
        subHeaderComponent ={
         <div className='w-100 justify-content-between d-flex'>
         <Button variant="primary" onClick={() => dispatch(setmodalshow(true))} >
            Create Product
          </Button>
          <input type='text'
            placeholder='Search here'
            className='w-25 form-control'
            value={search}
            onChange={(e) => setsearch(e.target.value)} />
          
        </div>
        }        
        />
        </>
      
      
  )
};

export default Products;