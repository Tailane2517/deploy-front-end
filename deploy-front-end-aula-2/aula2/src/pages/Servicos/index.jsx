// src\pages\Servicos\index.jsx

import './styles.css';

function Servicos() {
    return (
        <section className="servicos">
            <h1>Nossos Serviços</h1>
            <p>Oferecemos uma variedade de serviços para atender às suas necessidades florais, incluindo:</p>

            <div className='grid cols-3'>
                <div className='card'>
                    <h3>Arranjos Personalizados</h3>
                    <p>Criação de arranjos florais sob medida para qualquer ocasião, desde aniversários até eventos corporativos.</p>
                </div>
                <div className='card'>
                    <h3>Entrega Rápida</h3>
                    <p>Serviço de entrega eficiente para garantir que suas flores cheguem frescas e no horário combinado.</p>
                </div>
                <div className='card'>
                    <h3>Consultoria Floral</h3>
                    <p>Orientação especializada para ajudar você a escolher as flores perfeitas para cada evento ou decoração.</p>
                </div>
            </div>
        </section>
        
    )
}

export default Servicos;