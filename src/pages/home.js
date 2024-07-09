import { useSelector } from 'react-redux';
import logo  from '../images/Logo.png';
import cover  from '../images/cover.jpg';
import { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Loading from '../component/loading/loading';

const Home = () => {
    const {products, loading} = useSelector((state) => state.product);
    const [fproduct, setfproduct] = useState([]);
    
    useEffect(() => {        
      
        const result = products.filter((product) => {
            return (
              product.pfeatured === "true"    
            );     
        });
      
        setfproduct(result);
      },[products]);

      const chunkarray = (array, chunksize) => {
        const result=[];
        for(let i=0;i<array.length;i+=chunksize){
            const chunk = array.slice(i, i + chunksize).map(product => {
                return { ...product, classarray: [] }; 
              });            
            result.push(chunk);
        }

        const finalresult = result.map(subarray => (
            subarray.map((product, index) => {
              const remainder = index % 4;
          
              switch (remainder) {
                case 1:
                  product.classarray = ['col-sm-12', 'col-md-6', 'col-lg-3'];
                  break;
                case 2:
                  product.classarray = ['col-md-6', 'd-none', 'd-md-block', 'col-lg-3'];
                  break;
                case 3:
                case 0:
                  product.classarray = ['d-none', 'd-lg-block', 'col-lg-3'];
                  break;                
              }
          
              return product;
            })
          ));

        return finalresult;
    };

    
    const productchunks = chunkarray(fproduct, 4);
  
    return (
        <>  
            {loading ? (<Loading />) : (<>
            <div id="container" className="container-fluid p-0">
                <figure className="figure position-relative bg-black">
                    <img src={cover} className="figure-img img-fluid object-fit-cover m-0 opacity-50" alt="cover" /> 
                </figure>
                <figcaption className="position-absolute top-50 start-50 translate-middle">
                    <img src={logo} className="img-fluid object-fit-cover" alt="logo" />
                    <p className="fs-4 fw-bold text-center text-warning">
                        "Elegance
                            Is
                            Always In
                            Style"
                    </p>
                </figcaption>
            </div>

            <div id="container-slide" className="container-fluid p-0">
            <section className="my-5">
                <h1 className="text-center mb-4">Featured Products</h1>
                <div id="carousel"
                    className="carousel slide pointer-event">
                        <div className="carousel-inner">
                                        
                            {/* Mapping over productchunks to create carousel items */}
                            {productchunks.map((chunk,index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active':''}`}>
                                    <div className="row mx-2" id="product">
                                            
                                        {/* Mapping over each product chunk to create product cards */}
                                        {chunk.map(product => (
                                            <div key={product._id} className={`${product.classarray.join(' ')} py-3`}>
                                                <div className="card text-center">
                                                    <div className="h-50">
                                                        <img className="card-img-top img-fluid" src={product.imageurl} alt={product.name} />                                                       
                                                    </div>
                                                    <div className="card-body mt-4">
                                                        <h5 className="card-title fs-4 fw-bold">{product.pname}</h5>
                                                        <h6 className="card-text fs-5 fw-bold">{product.price}</h6>
                                                        <p className="text-truncate">{product.pdesc}</p>
                                                        <button className="btn btn-warning fs-4 fw-bold mt-4 px-3 rounded-4">
                                                        <FontAwesomeIcon className='cart me-3' icon={faCartShopping}/>
                                                        Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            ))}
                                                            
                        </div>

                        {/* Carousel controls */}
                        <button
                            className="carousel-control-prev h-75"
                            type="button"
                            data-bs-target="#carousel"
                            data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"
                                    aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                        </button>
                        <button 
                            className="carousel-control-next h-75"
                            type="button"
                            data-bs-target="#carousel"
                            data-bs-slide="next">
                                <span className="carousel-control-next-icon"
                                    aria-hidden="true"></span>
                            </button>
                        
                    </div>
            </section>
        </div>
        </>
        )}
        
        </>
    )
};

export default Home;