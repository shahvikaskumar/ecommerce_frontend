import { useEffect,useState } from 'react';
import { useSelector} from 'react-redux';
import Loading from '../../component/loading/loading';
import DataTable from 'react-data-table-component';
import { Container } from 'react-bootstrap';


const Userorders = () => {
    
    const [search, setsearch] = useState('');
    
    const { loading} = useSelector((state) => state.auth);
    const {userorder} = useSelector((state) => state.order);
    const [filuser, setfilluser] = useState([]);

    
    

    useEffect(() => {       
        
        const lowercasedSearch = search.toLowerCase();
        const result = userorder.filter((user) => {
            return (              
              user.totalamount.toString().toLowerCase().includes(lowercasedSearch) ||
              user.status.toLowerCase().match(lowercasedSearch) ||
              user.paystatus.toLowerCase().includes(lowercasedSearch)
            )
            
      
          });
          setfilluser(result);
          
    },[userorder, search]);



    const columns = [
        {
            name:"Order Date",
            selector:(row) => new Date(row.createdAt).toLocaleDateString(),
            sortable:true,
            
        },

        {
            name:"Products Cost",
            selector:(row) => row.totalcost,
            sortable:true,          
          },

          {
            name:"Shiping Cost",
            selector:(row) => row.shipingcost,
            sortable:true,          
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
        <Container>
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
          </Container>
        </>
    )
};

export default Userorders;