import React from 'react';
import './Item.css'

function Item(props) {
    return (
            <div className="col s12 m3">
                <div className="card">
                    <div className="card-image">
                        <img src={'https://http2.mlstatic.com/D_NQ_NP_2X_983745-MLA41071258804_032020-F.webp'} alt="imagen" />
                        <span className="card-title">{props.title}</span>
                    </div>
                    <div className="card-content">
                        <p>${props.price}</p>
                    </div>
                    <div className="card-action">
                  
                        <a href="#">Ver detalle</a>
                    </div>
                </div>
            </div>
    )
}


export default Item;