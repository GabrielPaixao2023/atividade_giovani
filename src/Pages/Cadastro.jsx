import "../Pages/cadastro.css"
import axios from "axios";
import { useState } from "react";
 
export function Cadastro() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeExistente, setNomeExistente] = useState(false);
 
  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };
 
  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
 
    try {
      const response = await axios.get(
        `http://localhost:7000/usuarios?nome=${nome}`
      );
      if (response.data.length > 0) {
        setNomeExistente(true);
      } else {
        const response = await axios.post("http://localhost:7000/usuarios", {
          nome: nome,
          senha: senha,
        });
        console.log("Usuário cadastrado com sucesso:", response.data);
 
        alert("Usuário criado com sucesso");
        // Limpe os campos de entrada após o envio do formulário
        setNome("");
        setSenha("");
        setNomeExistente(false);
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };
 
  return (
    <main>
      <section className="barraInicio">
        <div className="barraInicioContent">
          <h2>Bem vindo a área de cadastro</h2>
        </div>
      </section>
 
      <section className="categorias">
        <div className="box-containerL">
          <div className="containerL">
            <div className="icon">
              <img
                src="public/medias/images/signupIcon.svg"
                alt=""
                id="boxCadastrar"
              ></img>
            </div>
 
            <div className="containerInfo">
              <div className="containerLogin">
                <form onSubmit={handleSubmit}>
                  <section className="form-control">
                    <p>NOME</p>
                    <input
                      type="text"
                      id="nomel"
                      required
                      value={nome}
                      onChange={handleNomeChange}
                    />
                    {nomeExistente && (
                      <p style={{ color: "red" }}>Nome de usuário já existe</p>
                    )}
                  </section>
 
                  <section className="form-control">
                    <p>SENHA</p>
                    <input
                      type="password"
                      id="SenhaL"
                      required
                      value={senha}
                      onChange={handleSenhaChange}
                    />
                  </section>
 
                  <button type="submit">CADASTRAR</button>
                </form>
              </div>
            </div>
          </div>
        </div>
 
        <h1>Já tem uma conta?</h1>
        <a href="/login">Entre aqui.</a>
      </section>
    </main>
  );
}
 