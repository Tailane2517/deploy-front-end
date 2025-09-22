// src\pages\FaleConosco\index.jsx

import './styles.css';  

function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!')
    }
    return (
        <section className='contato'>
        <h1>Fale Conosco</h1>
        <p>Tire suas dúvidas e peça um orçamento sem compromisso.</p>

        <form className='form' onSubmit={handleSubmit}>
            <div className='grid cols-3'>
                <label className='field'>
                    <span>Nome</span>
                    <input type="text" name="nome" placeholder='Seu nome' required />
                </label>
                <label className='field'>
                    <span>Email</span>
                    <input type="email" placeholder="email" required />
                </label>
                <label className='field'>
                    <span>Telefone</span>
                    <input type="tel" placeholder='(xx) xxxx-xxxx' required />
                </label>
                </div>

                <label className='field'>
                    <span>Assunto</span>
                    <input type="text" required placeholder='Ex: Abertura de empresa'/>
                </label>

                <label className='field'>
                    <span>Mensagem</span>
                    <textarea rows="6" placeholder='Escreva sua mensagem aqui...' required></textarea>
                </label>
                <button className='brn primary' type='submit'>Enviar</button>
                </form>
        </section>

    )
}

export default FaleConosco;