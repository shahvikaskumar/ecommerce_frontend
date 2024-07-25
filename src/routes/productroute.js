import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductLayout from '../pages/Product/productslayout';
import Product from '../pages/Product/product';
import ProductDetail from '../pages/Product/productdetail';
import { useSelector } from 'react-redux';
import NotFound from '../pages/notfound';

const ProductRoutes = () => {
  const { singleproduct } = useSelector((state) => state.product);

  return (
    <Routes>
      <Route path='/product' element={<ProductLayout />}>
        <Route path='/product/allproduct' element={<Product cate='All' subcate="All" />} />
        <Route path='/product/women/all' element={<Product cate='Women' subcate="All" />} />
        <Route path='/product/women/dresses' element={<Product cate='Women' subcate="Dresses" />} />
        <Route path='/product/women/pants' element={<Product cate='Women' subcate="Pants" />} />
        <Route path='/product/women/skirts' element={<Product cate='Women' subcate="Skirts" />} />
        <Route path='/product/women/gowns' element={<Product cate='Women' subcate="Gowns" />} />
        <Route path='/product/men/all' element={<Product cate='Men' subcate="All" />} />
        <Route path='/product/men/shirts' element={<Product cate='Men' subcate="Shirts" />} />
        <Route path='/product/men/pants' element={<Product cate='Men' subcate="Pants" />} />
        <Route path='/product/men/trousers' element={<Product cate='Men' subcate="Trousers" />} />
        <Route path='/product/men/jeans' element={<Product cate='Men' subcate="Jeans" />} />
        <Route path='/product/kids/all' element={<Product cate='Kids' subcate="All" />} />
        <Route path='/product/kids/tops' element={<Product cate='Kids' subcate="Tops" />} />
        <Route path='/product/kids/bottoms' element={<Product cate='Kids' subcate="Bottoms" />} />
        <Route path='/product/kids/onepc' element={<Product cate='Kids' subcate="One Pieces" />} />
        <Route path='/product/kids/innerwear' element={<Product cate='Kids' subcate="Innerwears" />} />
      </Route>
      <Route path='/productdetail/:id' element={<ProductDetail product={singleproduct} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default ProductRoutes;
