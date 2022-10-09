import React, { useState, useEffect } from "react";
import { ProductService } from "../../data/services/ProductService";
import { Channel } from "../../data/services/EventService";
import ProductItem from "./ProductItem";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        startData();

        Channel.on("product:remove", remove);

        return () => {
            Channel.removeListener("product:remove", remove);
        };
    });

    async function startData() {
        const products = await ProductService.listAll();
        setProducts(products);
    }

    async function remove(productId) {
        const productIndex = products.findIndex(
            (product) => product.id === productId
        );
        await ProductService.remove(productId);
        products.splice(productIndex, 1);
        setProducts(products);
    }

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ProductItem products={products} />
        </div>
    );
}
