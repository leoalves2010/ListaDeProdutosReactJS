import React from "react";
import { Channel } from "../../data/services/EventService";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function ProductItem({ products = [] }) {
    function remove(productId) {
        Channel.emit("product:remove", productId);
    }

    return (
        <ul className="product-list">
            <TransitionGroup>
                {products.map((product) => (
                    <CSSTransition
                        key={product.id}
                        timeout={300}
                        classNames={'product'}
                    >
                        <li className="product-list-item">
                            <button
                                onClick={() => {
                                    remove(product.id);
                                }}
                            >
                                X
                            </button>
                            <img
                                src={product.image}
                                alt={product.description}
                            />
                            <div>{product.description}</div>
                            <div>{product.price}</div>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}
