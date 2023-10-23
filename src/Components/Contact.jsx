import './contact.css'


export default function Contact() {
    return (
        <div className='support'>
            <h2>Tem Alguma dúvida? Mande uma mensagem para o nosso Suporte.</h2>

            <form className='support-form'>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='E-mail' />
                <textarea name="message" id="" cols="30" rows="15" placeholder='Mensagem'></textarea>

                <button>Enviar</button>
            </form>
        </div>
    );
}
