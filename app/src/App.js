import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";

const NewProduct = loadable(() => import("./ui/views/NewProduct"), {
    fallback: <h1>Carregando a página 'Novos Produtos'. Aguarde...</h1>,
});
const ProductList = loadable(() => import("./ui/views/ProductList"), {
    fallback: <h1>Carregando a página 'Listagem de Produtos'. Aguarde...</h1>,
});

function App() {
    return (
        <div>
            <div>
                <header>
                    <nav>
                        <ul className="link-list">
                            <li>
                                <Link to={"/"}>Novo</Link>
                            </li>
                            <li>
                                <Link to={"/list"}>Lista</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            <Routes>
                <Route path={"/"} element={<NewProduct />} />
                <Route path={"/list"} element={<ProductList />} />
            </Routes>
        </div>
    );
}

export default App;
