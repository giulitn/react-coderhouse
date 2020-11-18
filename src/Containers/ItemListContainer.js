import React, { useState, useEffect } from 'react';
import Item from '../Components/Item/Item'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // const getProducts = fetch('https://api.mercadolibre.com/sites/MLA/search?q=remera&limit=12'); // esto es ASYNC, por eso después va un "then"
        // const getProducts = fetch('https://cors-anywhere.herokuapp.com/https://api.tiendanube.com/v1/1115596/products');

        const getProducts = fetch('https://api.tiendanube.com/v1/1115596/products', {
            method: 'get',
            headers: new Headers({
                'Authentication': 'bearer f56670a0524e2df8662d2fb0646c8fc3b2303beb',
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*'
            }),
        });

        getProducts
            .then((res) => {
                console.log(res);
                const data = res.json();
                return data;
            })
            .then((data) => {
                console.log("mis datos:", data.results);
                setProducts(data.results);
            }
            )
    }, []
    );

    return (
        <div>
            {products.map((product) => (
                <Item key={product.id} title={product.title} id={product.id} price={product.price} img={product.picture} />
            )
            )}
        </div>
    );
}

export default ItemListContainer;