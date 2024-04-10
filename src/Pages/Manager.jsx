import { useEffect, useState } from "react";
import axios from "axios";
import "../Pages/manager.css";

export function Manager() {
    const [formDataAdd, setFormDataAdd] = useState({
        nome: "",
        img: "",
        descricao: ""
    });

    const handleInputChangeAdd = (event) => {
        const { name, value } = event.target;
        setFormDataAdd((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmitAdd = async (event) => {
        event.preventDefault();

        try {
            const resposta = await axios.post(
                `http://localhost:7000/clientes`,
                formDataAdd
            );
            console.log("Operação realizada:", resposta.data);
            console.log("Imagem: ", formDataAdd.imagem);
            alert("Produto adicionado com sucesso");
            setFormDataAdd({
                nome: "",
                img: "",
                descricao: ""
            });
        } catch (error) {
            console.error("Erro ao realizar operação", error);
        }
    };


    return (
        <main>
            <section className="barraInicio">
                <div className="barraInicioContent">
                    <h2>Bem vindo a área de Clientes</h2>
                </div>
            </section>
            <section className="Inserir">
                <form onSubmit={handleSubmitAdd}>
                    <div className="productValues">
                        <h2>Adicionar Cliente</h2>
                        <div className="valuesP">
                            <p>Nome</p>
                            <input type="text" name="nome" value={formDataAdd.nome} onChange={handleInputChangeAdd} required />
                        </div>
                        <div className="valuesP">
                            <p>Descrição</p>
                            <input type="text" name="descricao" value={formDataAdd.descricao} onChange={handleInputChangeAdd} required />
                        </div>
                        <div className="valuesP">
                            <p>Imagem</p>
                            <input type="text" name="img" value={formDataAdd.img} onChange={handleInputChangeAdd} required />
                        </div>
                        <button type="submit">Adicionar</button>
                    </div>
                </form>
            </section>
        </main>

    );
}