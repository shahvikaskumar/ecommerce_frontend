import { FormLabel, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { applyFilters, applySorting } from "../../../redux/slice/productslice";

const Sidebar = () => {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        
        category: '',
        subcate:'',   
        
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleApplyFilters = () => {
        
        dispatch(applyFilters(filters));

    };

    const handleSortingChange = (e) => {        
        dispatch(applySorting(e.target.value));
    };


    return (
        <>
       <div className="sidebar">
            <h2>Filters</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input type="text" className="form-control" id="category" name="category" value={filters.category} onChange={handleFilterChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="subcate" className="form-label">Subcategories</label>
                    <input type="text" className="form-control" id="subcate" name="subcate" value={filters.subcate} onChange={handleFilterChange} />
                </div>
                {/* Add more filter fields as needed */}
                <button type="button" className="btn btn-primary" onClick={handleApplyFilters}>Apply Filters</button>
            </form>
            <hr />
            <h2>Sort By</h2>
            <select className="form-select" onChange={handleSortingChange}>
                <option value="">Select...</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                {/* Add more sorting options based on other fields */}
            </select>
        </div>
        </>
    )

};

export default Sidebar;