import React from "react";
import { Channel } from "../../data/services/EventService";

export default function ProductItem({ products = [] }) {
    function remove(productId) {
        Channel.emit("product:remove", productId);
    }

    return (
        <ul className="product-list">
            {products.map((product) => (
                <li key={product.id} className="product-list-item">
                    <button
                        onClick={() => {
                            remove(product.id);
                        }}
                    >
                        X
                    </button>
                    <img src={product.image} alt={product.description} />
                    <div>{product.description}</div>
                    <div>{product.price}</div>
                </li>
            ))}
        </ul>
    );
}
