// src\pages\Home\index.jsx

import { Link } from 'react-router-dom';
import './styles.css';
import hero from '../../assets/hero.png';
import office from '../../assets/office.png';





function Home() {
    return (
        <div className="home">
            <section className='hero'>
                <div className='hero__wrap'>
                    <h1>Bem-vindo à Flores & Cia</h1>
                    <p>Sua floricultura de confiança para todas as ocasiões</p>
                    <div className='hero__cta'>
                        <Link to="/servicos" className='btn primary'>Nossos Serviços</Link>
                        <Link to="/fale-conosco" className='btn'> Fale com especialista</Link>
                    </div>
                </div>
                <div className='hero__image'>
                    <img src={hero} alt="Flores" />
                </div>
            </section>

            <section className='features'>
                <h2>Por que escolher a Flores & Cia?</h2>
                <div className='grid cols-3'>
                    <div className='card'>
                        <h3>Atendimento prioritário</h3>
                        <p>Suporte rápido e eficiente pelo Whatsapp para todas as suas necessidades florais.</p>
                    </div>
                    <div className='card'>
                        <h3>Entrega Rápida</h3>
                        <p>Garantimos que suas flores cheguem frescas e no horário combinado.</p>
                    </div>
                    <div className='card'>
                        <h3>Variedade de Flores</h3>
                        <p>Oferecemos uma ampla seleção de flores para todas as ocasiões.</p>
                    </div>
                </div>
            </section>

            <section className='social-proof'>
                <div className='social-proof__image'>
                    <img src={office} alt="Escritório da empresa." />
                </div>
                <div className='social-proof__text'>
                    <h2>O que nossos clientes dizem</h2>
                    <p>"A Flores & Cia fez do meu casamento um dia ainda mais especial com seus arranjos incríveis!" - Maria S.</p>
                    <p>"Serviço de entrega rápido e flores sempre frescas. Recomendo muito!" - João P.</p>
                </div>
            </section>

        </div>
    )
}
export default Home;