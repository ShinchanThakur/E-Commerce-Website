import ListProducts from '@/components/products/ListProducts';
import axios from 'axios';
import React from 'react'

const getProducts = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/api/products`);
    return data.products;
};

const HomePage = async () => {
    const products = await getProducts();
    return (
        <ListProducts products={products} />
    );
};

export default HomePage