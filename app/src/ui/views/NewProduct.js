import React, { useState } from "react";
import { ProductService } from "../../data/services/ProductService";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);  
    const navigate = useNavigate();  

    async function handleSubmit(event) {
        event.preventDefault();
        if(image !== "" && description !== ""){
            const newProduct = {
                image,
                description,
                price,
            };
    
            if (!newProduct.image && !newProduct.description && !newProduct.price) {
                return false;
            }

            setImage("");
            setDescription("");
            setPrice(0);
    
            await ProductService.create(newProduct);
            navigate("/list");
        }
    }

    return (
        <div>
            <h1>Novo Produto</h1>
            <form className="product-form" onSubmit={handleSubmit}>
                <label>
                    <span>Imagem:</span>
                    <input
                        onChange={(event) => setImage(event.target.value)}
                        name="image"
                        type="text"
                        value={image}
                    />
                </label>

                <label>
                    <span>Descrição:</span>
                    <input
                        onChange={(event) => setDescription(event.target.value)}
                        name="description"
                        type="text"
                        value={description}
                    />
                </label>

                <label>
                    <span>Preço:</span>
                    <input
                        onChange={(event) => setPrice(event.target.value)}
                        name="price"
                        type="text"
                        value={price}
                    />
                </label>

                <button type="submit">Criar Produto</button>
            </form>
        </div>
    );
}
