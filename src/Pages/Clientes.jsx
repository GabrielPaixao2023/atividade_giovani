import { useEffect, useState } from 'react'
import '../Pages/clientes.css'
import primeiraPessoa from '../assets/img/primeiraPessoa.avif'
import segundaPessoa from '../assets/img/segundaPessoa.webp'
import terceiraPessoa from '../assets/img/terceiraPessoa.jpg'
import axios from "axios";


export function Clientes() {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposta = await axios.get("http://localhost:7000/clientes")
                setData(resposta.data)
            } catch (error) {
                console.log("Erro, ", error)
            }
        }

        fetchData();
    })

    return (
        <>

            <main>

                <section className='textoPrincipal'>

                    <div id='primeiroTexto'>
                        <p>
                            <h1>NOSSOS CLIENTES</h1> <br />

                            Nós entrgamos qualidade
                        </p>
                    </div>

                </section>

                <section className='pessoas'>

                    {data.map((client) => (
                        <div className="clientes" key={client.id}>
                            <h1>{client.nome}</h1>
                            <h2>{client.descricao}</h2>
                            <img src={client.img} alt="" />
                        </div>
                    ))}

                </section>

            </main>

        </>
    )
}