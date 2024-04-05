import '../Pages/servicos.css'
import tablet from '../assets/img/tablet1.webp'
import tranca from '../assets/img/tranca.jpg'
import celular from '../assets/img/celular.jpg'

export function Servicos() {

    return (
        <>
            <main>

                <section className="textos">
                    <article id="titulo">
                        <p>
                            <h2>NOSSOS SERVIÇOS</h2> <br />

                            Trabalhando para o que você precisa
                        </p>
                    </article>
                </section>

                <section className='produtos'>
                    <article id='produto1'>

                        <figure>
                            <img src={tablet} alt="" />
                        </figure>

                        <figcaption>
                            SERVIÇOS <br />
                            Atenção aos detalhes
                        </figcaption>

                    </article>

                    <article id='produto2'>

                        <figure>
                            <img src={tranca} alt="" />
                        </figure>

                        <figcaption>
                            SERVIÇOS <br />
                            Sempre preparado
                        </figcaption>

                    </article>

                    <article id='produto2'>

                        <figure>
                            <img src={celular} alt="" />
                        </figure>

                        <figcaption>
                            SERVIÇOS <br />
                            Serviços especializados
                        </figcaption>

                    </article>

                </section>

            </main>
        </>
    )

}