// src\components\Footer\index.jsx

import './styles.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <div>
                    <strong>Flores & Cia</strong>
                </div>
                <div>
                    Rua das Flores, 123 - Cidade Jardim<br/>
                </div>
                <div className='copy'>
                    © {new Date().getFullYear()} Todos os direitos reservados
                </div>
               </div> 
                
            <p>&copy; 2024 Flores & Cia. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;