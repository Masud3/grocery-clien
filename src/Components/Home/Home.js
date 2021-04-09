import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productData from '../../Data/Data.json';
import Admin from '../Admin/Admin';

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(productData)
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    items.map(item => <Admin item={item}></Admin>)
                }
            </div>
        </div>
    );
};

export default Home;