import { useDispatch, useSelector } from "react-redux";
import { applyFilters,  setsidefilter } from "../../../redux/slice/productslice";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { setProductsPerPage } from "../../../redux/slice/productslice";
import { setfiltershow } from "../../../redux/slice/headerslice";
import { resetfilter, setfilterinput, setpricerange, setratingrange } from "../../../redux/slice/filterslice";

const CustomValueLabel = styled(({ children, value, index, ...props }) => (
    <Slider.ValueLabel {...props} open={true}>
      <div>{children}</div>
      <div style={{ marginTop: '10px', color: '#000' }}>{index === 0 ? `Min: ₹${value[0]}` : `Max: ₹${value[1]}`}</div>
    </Slider.ValueLabel>
  ))(({ theme }) => ({
    [`& .${Slider.valueLabelClasses.offset}`]: {
      left: 'calc(-50% + 4px)',
      top: 30,
      '& *': {
        background: 'transparent',
        color: theme.palette.text.primary,
      },
    },
  }));




const Sidebar = () => {
    const dispatch = useDispatch();    
    const { productperpage, minprice, maxprice } = useSelector((state) => state.product);
    const navigate = useNavigate();
    const filterinput = useSelector((state) => state.filter);
    
  
  const rangeselector = (event, newvalue) => {
        dispatch(setpricerange(newvalue));   
  };

  const ratingselector = (event, newvalue) => {
    dispatch(setratingrange(newvalue)); 
    
  };

  

const handlePerPageChange = (e) => {
    dispatch(setProductsPerPage(parseInt(e.target.value, 10)));
    dispatch(setfiltershow(false));
};

const categories = {
    Women: ['Dresses', 'Pants', 'Skirts','Gowns'],
    Men: ['Shirts', 'Pants', 'Trousers','Jeans'],
    Kids: ['Tops', 'Bottoms', 'One Pieces', 'Innerwears'],
  };

const handleinputchange = (e) => {
    const { name, value } = e.target;
    dispatch(setfilterinput({name, value}));
  };

  const handleresetfilter = () => {
    dispatch(resetfilter());
    dispatch(setpricerange([minprice,maxprice]));
    dispatch(setsidefilter());
    dispatch(setfiltershow(false));
  };
    
  const handleapplyfilters = () => {        
        navigate('/product/allproduct');
        
        setTimeout(() => {
          dispatch(applyFilters(filterinput));
          dispatch(setfiltershow(false));
      }, 100);
  };

    return (
        <>
        <div className="d-lg-none mb-3">
            <h2>Pagination</h2>
        <div className="input-group mt-3">
                    <span className="input-group-text fs-6" >Item per page</span>    
                    <select className=" fs-6 ps-1 form-select form-select-sm" onChange={handlePerPageChange} value={productperpage}>
                        <option value="4">4</option>
                        <option value="8">8</option>
                        <option value="12">12</option>
                        <option value="16">16</option>
                        <option value="20">20</option>
                    </select>
                </div>
        </div>
       <div className="sidebar py-lg-3 ps-lg-5">
            <h2>Filters</h2>
            
            <div className="mt-3">
                <label htmlFor="pcate" className="form-label fs-5">Category</label>           
                <select className="form-select" id="pcate" name="pcate" onChange={handleinputchange} value={filterinput.pcate}>
                        <option value="Select...">Select...</option>
                        <option value="Women">Women</option>
                        <option value="Men">Men</option>
                        <option value="Kids">Kids</option>
                </select>
            </div>
            <div className="mt-3">
                <label htmlFor="psubcate" className="form-label fs-5">Subcategory</label>           
                <select className="form-select" id="psubcate" name="psubcate" onChange={handleinputchange} value={filterinput.psubcate} disabled={filterinput.pcate === "Select..."}>
                <option value="Select...">Select...</option>
                    {filterinput.pcate !== "Select..." && 
                        categories[filterinput.pcate].map((subcate) => (
                          <option key={subcate} value={subcate}>{subcate}</option>
                        ))
                    }
                </select>
            </div>                

             <Container className="px-0">
        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt={3}>
        
        <Typography id="range-slider" className="fs-5 fw-bold" gutterBottom>
            Price Range:
        </Typography>
        
        <Slider className="pb-2"
          value={filterinput.prange}
          onChange={rangeselector}
          valueLabelDisplay="auto"
          valuelabelcomponent={CustomValueLabel}
          aria-labelledby="range-slider"
          min={minprice}
          max={maxprice}
          step={1}
        />
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography variant="body2">₹ {minprice}</Typography>
          <Typography variant="body2">₹ {maxprice}</Typography>
        </Box>
    
      </Box>
    </Container>


    <Container className="px-0">
        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt={3}>
        
        <Typography id="range-slider" className="fs-5 fw-bold" gutterBottom>
          Product Rating:
        </Typography>
        
        <Slider className="pb-2"
          value={filterinput.rrange}
          onChange={ratingselector}
          valueLabelDisplay="auto"
          valuelabelcomponent={CustomValueLabel}
          aria-labelledby="range-slider"
          min={0}
          max={5}
          step={0.1}
        />
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography variant="body2">0</Typography>
          <Typography variant="body2">5</Typography>
        </Box>
    
      </Box>
    </Container>   
    
    
            <h2 className="mt-3">Sort By</h2>
            <div className="input-group  mt-4">
                    <label htmlFor="sbname" className="input-group-text fs-6" >Name</label>    
                    <select className=" fs-6  form-select form-select-sm" id="sbname" name="sbname" onChange={handleinputchange} value={filterinput.sbname}>
                        <option value="Select...">Select...</option>
                        <option value="name-asc">A to Z</option>
                        <option value="name-dsc">Z to A</option>                        
                    </select>
                </div>

                <div className="input-group  mt-4">
                    <label htmlFor="sbprice" className="input-group-text fs-6" >Price</label>    
                    <select className=" fs-6  form-select form-select-sm" id="sbprice" name="sbprice" onChange={handleinputchange} value={filterinput.sbprice} >
                        <option value="Select...">Select...</option>
                        <option value="price-asc">Low to High</option>
                        <option value="price-dsc">High to Low</option>                        
                    </select>
                </div>

                <div className="input-group  mt-4">
                    <label htmlFor="sbrating" className="input-group-text fs-6" >Rating</label>    
                    <select className=" fs-6  form-select form-select-sm" id="sbrating" name="sbrating" onChange={handleinputchange} value={filterinput.sbrating}>
                        <option value="Select...">Select...</option>
                        <option value="rating-asc">A to Z</option>
                        <option value="rating-dsc">Z to A</option>                        
                    </select>
                </div>


            
            <div className="w-100 mt-4  d-flex justify-content-between">
                <Button className="bg-warning border-0 text-black fs-5 fw-bold" onClick={handleapplyfilters}>Apply</Button>
                <Button className="bg-warning border-0 text-black fs-5 fw-bold" onClick={handleresetfilter}>Reset</Button>
            </div>
        </div>
        </>
    )

};

export default Sidebar;