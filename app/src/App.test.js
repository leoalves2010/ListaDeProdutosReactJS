import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
    it("should add a product to the list", async () => {
        const app = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        userEvent.click(app.container.querySelector('.link-list > li:first-child'));

        await waitFor(() => {
            expect(app.queryByText("Criar Produto")).toBeInTheDocument();
        });

        const inputImage = app.container.querySelector('input[name="image"]');
        const inputDescription = app.container.querySelector('input[name="description"]');
        const inputPrice = app.container.querySelector('input[name="price"]');
        const addButton = app.container.querySelector('button[type="submit"]');

        userEvent.type(inputImage, "https://todepassagem.clickbus.com.br/wp-content/uploads/2022/04/cidades-do-chocolate-no-Brasil-scaled.jpg");
        userEvent.type(inputDescription, "Chocolate ao Leite");
        userEvent.type(inputPrice, "9.59");
        userEvent.click(addButton);

        await waitFor(() => {
            expect(app.queryByText("Chocolate ao Leite")).toBeInTheDocument();
        });
    });

    it("should not allow adding a product with blank fields", async () => {
        const app = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        userEvent.click(app.container.querySelector('.link-list > li:first-child a'));

        await waitFor(() => {
            expect(app.queryByText("Criar Produto")).toBeInTheDocument();
        });

        const inputImage = app.container.querySelector('input[name="image"]');
        const inputDescription = app.container.querySelector('input[name="description"]');
        const inputPrice = app.container.querySelector('input[name="price"]');
        const addButton = app.container.querySelector('button[type="submit"]');

        userEvent.type(inputImage,"");
        userEvent.type(inputDescription, "");
        userEvent.type(inputPrice, "");
        userEvent.click(addButton);

        await waitFor(() => {
            expect(app.queryByText("Criar Produto")).toBeInTheDocument();
        });
    });

    it("should remove a product from the list", async () => {
        const app = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        userEvent.click(app.queryByText("Lista"));

        await waitFor(() => {
            expect(app.queryByText("X")).toBeInTheDocument();
        });

        userEvent.click(app.queryByText("X"));

        await waitFor(() => {
            expect(app.queryByText("Chocolate ao Leite")).not.toBeInTheDocument();
        });
    });
});
