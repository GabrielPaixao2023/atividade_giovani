import "./style.css";
import imgPrincipal from '../../assets/img/primeiraImg_deploy.png'
import Logo from '../../assets/img/Logo_deploy.png'
import segundaImg from '../../assets/img/segundaImg.jpg'


export function Header() {

    return (
        <div>
            <header>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="cabecalho">
                    <a href="/">Página Principal</a>
                    <a href="/Sobre">Sobre</a>
                    <a href="/Servicos">Serviços</a>
                    <a href="/Clientes">Clientes</a>
                    <a href="/Cadastro">Cadastro</a>
                    <a href="/Login">Login</a>
                </div>
            </header>

        </div>



    )
}