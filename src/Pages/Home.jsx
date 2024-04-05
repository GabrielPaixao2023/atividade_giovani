import { useNavigate } from 'react-router-dom'
import imgPrincipal from '../assets/img/primeiraImg_deploy.png'
import segundaImg from '../assets/img/segundaImg.jpg'
import '../App.css'

export function Home() {
    const navegacao = useNavigate()

    function redirecionar() {
        navegacao('/Obrigado')
    }
    return (
        <>
            <section className="primeira_section">
                <img src={imgPrincipal} alt="" />
            </section>

            <section className="segunda_section">

                <figure class="img-2">
                    <img src={segundaImg} alt="" width="500" height="500" />
                </figure>



                <div className="part-2">

                    <article className="sobre">
                        <h2>SOBRE DEPLOY</h2> <br /> <br /> <br />
                        <p>
                            Ágil, eficiente e honesto, a Deploy tornou-se um Serviço de <br />
                            automação residencial respeitável e conhecido. Nossa equipe está <br />
                            preparada para qualquer serviço, gerenciando projetos com a <br />
                            habilidade e experiência que nossos clientes esperam. Para oferecer <br />
                            um trabalho satisfatório aos nossos clientes, fornecemos canais de <br />
                            comunicação abertos durante cada projeto.
                        </p>    <br /><br />
                        <a href="sobre.html">
                            <h4>Saiba mais</h4>
                        </a>

                    </article>

                </div>



            </section>

            <section className="terceira_section">
                
                <article className="contato">

                    <h2>ENTRE EM CONTATO</h2>
                
                <div className="formulario">

                    <form action="https://api.staticforms.xyz/submit" onSubmit={redirecionar} method="post">

                        <label>Nome</label>
                        <input type="text" name="Nome" placeholder="Insira seu nome" autoComplete="off" required />
                        <label>Email</label>
                        <input type="text" name="Email" placeholder="Insira seu email" autoComplete="off" required />
                        <label>Telfone</label>
                        <input type="text" name="Telefone" placeholder="Insira seu telefone" autoComplete="off" required />
                        <label>Assunto</label>
                        <input type="text" name="Assunto" placeholder="Insira o assunto" autoComplete="off" required />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua mensagem"></textarea>
                        <button type="submit">Enviar</button>

                        <input type="hidden" name="accessKey" value="ed4520dd-f977-40d8-a51f-592ddba99f50" />
                        <input type="hidden" name="redirectTo" value="http://127.0.0.1:5500/obrigado.html" />

                    </form>

                </div>

                </article>

            </section>

            <section className="quarta_section">
                <div className="Maps">

                </div>
            </section>

        </>
    )
}