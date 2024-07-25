import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Loading from '../../component/loading/loading';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Customers = () => {
    
    const [search, setsearch] = useState('');
    const [filuser, setfilluser] = useState([]);
    const {allusers, loading} = useSelector((state) => state.auth);
    
  // Filter users based on search input
   useEffect(() => {
        
        
        const lowercasedSearch = search.toLowerCase();

      const result = allusers.filter((user) => {
      return (
        user.name.toLowerCase().match(lowercasedSearch) ||
        user.email.toLowerCase().includes(lowercasedSearch) ||
        (user.address && user.address.length > 0 && user.address[0].toLowerCase().includes(lowercasedSearch)) ||
        user.mobileno.toString().toLowerCase().includes(lowercasedSearch) 

      );

    });
    setfilluser(result);

    },[allusers, search]);
    

    // Define columns for DataTable
    const columns = [
        {
            name: "Profile Image",
            selector: (row) => (
              row.profile_picurl ? (
               
                <img
                  className='my-2 rounded-circle ratio ratio-1x1 overflow-hidden'
                  src={row.profile_picurl}
                  alt={row.pname}
                  style={{ width: '80px', height: '80px' }}
                />
               
              ) : (
                <FontAwesomeIcon className='my-2 rounded-circle ratio ratio-1x1 overflow-hidden'
                  icon={faUserCircle}
                  style={{ width: '80px', height: '80px' }}
                />
              )
              
            ),
            width:"180px"
          },
        
        {
          name:"Name",
          selector:(row) => row.name,
          sortable:true,
          width:"250px"
        },
        {
          name:"Email ID",
          selector:(row) => row.email,
          sortable:true,
          width:"350px"
        },
        {
          name:"Mobile No",
          selector:(row) => row.mobileno,
          sortable:true,
          width:"180px"
        },

        {
            name:"Address",
            selector:(row) => row.address,
            sortable:true,
            width:"500px"
        }
             
        
      ]
    

    return (
        <>
        {loading && <Loading /> }                 
        <DataTable className='px-4 justify-content-center' title="Customer List"
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

export default Customers;