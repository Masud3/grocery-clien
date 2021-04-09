import React from 'react';
import productData from '../../Data/Data.json'

const Deals = () => {
    const handleAddProduct = () =>{
        fetch('http://localhost:5000/addProduct', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData[1])
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="container">
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default Deals;