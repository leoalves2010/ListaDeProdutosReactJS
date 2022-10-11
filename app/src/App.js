import "./App.css";
import NewProduct from "./ui/views/NewProduct";
import ProductList from "./ui/views/ProductList";
import { Routes, Route, Link } from "react-router-dom";

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
