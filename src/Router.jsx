import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Obrigado } from "./Pages/Obrigado";
import {Sobre} from "../src/Pages/Sobre";
import { Home } from "./Pages/Home";
import { Servicos } from "./Pages/Servicos";
import { Clientes } from "./Pages/Clientes";
import { Cadastro } from "./Pages/Cadastro";
import { Login } from "./Pages/Login";
import { Manager } from "./Pages/Manager";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Obrigado" element={<Obrigado/>} />
                <Route path="/Sobre" element={<Sobre/>} />
                <Route path="/Servicos" element={<Servicos/>} />
                <Route path="/Clientes" element={<Clientes/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Manager" element={<Manager/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;