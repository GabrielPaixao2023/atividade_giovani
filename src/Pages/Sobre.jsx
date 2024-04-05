import '../Pages/sobre.css'
import aplicacao from '../assets/img/aplicacao.png'
import ultimaImg from '../assets/img/empresas-do-futuro.jpg'

export function Sobre() {
    return (
        <>
            <main>
                <section className="sobre-nos">

                    <article id="titulo">

                        <p>
                            <h2>UM POUCO SOBRE NÓS</h2> <br /><br />

                            Ao longo dos anos, aprendemos que um ótimo serviço começa e
                            termina com profissionais experientes e amigáveis, o que explica
                            nosso rigoroso processo de contratação. Acreditamos que nossa
                            equipe seja a melhor do setor e temos total confiança em cada
                            pessoa que fornece nossos serviços. <br /><br />

                            A Deploy finaliza cada projeto dentro do prazo e com o maior
                            nível de qualidade. Com foco em serviços personalizados, preços
                            competitivos e satisfação do cliente, estamos sempre nos
                            esforçando para atender e superar nossas expectativas.
                        </p>

                    </article>

                    <aside id='img-sobre'>

                        <img src={aplicacao} alt="" />

                    </aside>

                </section>

                <section className='depoimento'>

                    <article className='depoi1'>
                        <p>
                            Este é seu espaço para depoimentos. Use
                            este espaço para compartilhar avaliações
                            sobre você, seus serviços . seu negócio.
                            Faça seus visitantes tomarem a iniciativa de
                            falar <br /> com você! <br /><br />
                            R. Silva
                        </p>

                    </article>

                    <article className='depoi2'>
                        <p>
                            Este é seu espaço para depoimentos. Use
                            este espaço para compartilhar avaliações
                            sobre você, seus serviços . seu negócio.
                            Faça seus visitantes tomarem a iniciativa de
                            falar <br /> com você! <br /><br />
                            S. Bonifácio
                        </p>

                    </article>


                    <article className='depoi3'>
                        <p>
                            Este é seu espaço para depoimentos. Use
                            este espaço para compartilhar avaliações
                            sobre você, seus serviços . seu negócio.
                            Faça seus visitantes tomarem a iniciativa de
                            falar <br /> com você! <br /><br />
                            C. Davi
                        </p>

                    </article>

                </section>

                <section className='ult-img'>
                    <img src={ultimaImg} alt="" />
                </section>
            </main>
        </>
    )
}