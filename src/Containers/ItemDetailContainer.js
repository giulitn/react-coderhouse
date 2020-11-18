// import React, { useState, useEffect } from 'react';
// import ItemDetail from '../Components/ItemDetail/ItemDetail';



// const ItemDetailContainer = () => {
//     const [products, setProducts] = useState( [] );
//     useEffect(() => {
//         const delay = setTimeout(() => {
//             const getProducts = fetch('https://api.mercadolibre.com/sites/MLA/search?q=remera&limit=12'); // esto es ASYNC, por eso después va un "then"
//             getProducts
//                 .then((res) => {
//                     const data = res.json();
//                     return data;
//                 })
//                 .then((data) => {
//                     console.log("mis datos:", data.results);
//                     setProducts(data.results);
//                 }
//                 )
//         }, 2000);
//         return () => clearTimeout(delay);
//     }, []
//     );

//     return (
//         <div>
//             {products.map((product) => (
//                 <Item title={product.title} id={product.id} price={product.price} img={product.picture} />
//             )
//             )}
//         </div>
//     );
// }

// export default ItemListContainer;