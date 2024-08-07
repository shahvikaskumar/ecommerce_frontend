import { useEffect,useState } from 'react';
import {useSelector} from 'react-redux';
import Loading from '../../component/loading/loading';
import DataTable from 'react-data-table-component';


const Orders = () => {
    
    const [search, setsearch] = useState('');
    const {loading} = useSelector((state) => state.auth);
    const {allorder} = useSelector((state) => state.order);
    const [filuser, setfilluser] = useState([]);
    
    // Filter orders based on search query
    useEffect(() => {       
       console.log(allorder); 
        const lowercasedSearch = search.toLowerCase();
        const result = allorder.filter((user) => {
      return (
        user.userid.name.toLowerCase().match(lowercasedSearch) ||
        user.totalamount.toString().toLowerCase().includes(lowercasedSearch) ||
        user.status.toLowerCase().match(lowercasedSearch) ||
        user.paystatus.toLowerCase().includes(lowercasedSearch) 

      );

    });
    setfilluser(result);

    },[allorder, search]);



    const columns = [
        {
            name:"Order Date",
            selector:(row) => new Date(row.createdAt).toLocaleDateString(),
            sortable:true,
            
        },

        {
            name: "Customer Name",
            selector: (row) => row.userid.name,               
        },
        
        {
          name:"Amount",
          selector:(row) => row.totalamount,
          sortable:true,          
        },

        {
          name:"Order Status",
          selector:(row) => row.status,
          sortable:true,
          
        },
        {
          name:"Payment Status",
          selector:(row) => row.paystatus,
          sortable:true,          
        },

        
             
        
      ]
    
    return(
        <>
        {loading && <Loading /> }                 
        <DataTable className='px-4 justify-content-center' title="Order List"
          columns={columns} 
          data={filuser} 
          pagination 
          fixedHeader
          fixedHeaderScrollHeight='700px'
          selectableRows
          highlightOnHover
          selectableRowsHighlight        
          subHeader
          subHeaderComponent ={
                    
            <input type='text'
              placeholder='Search here'
              className='w-25 form-control'
              value={search}
              onChange={(e) => setsearch(e.target.value)} />         
          }        
          />
        </>
    )
};

export default Orders;