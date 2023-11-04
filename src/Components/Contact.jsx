import { useState } from 'react';
import './contact.css'
import axios from 'axios';


export default function Contact() {
    const [titleMessage, setTitleMessage] = useState("")
    const [emailMessage, setEmailMessage] = useState("")
    const [message, setMessage] = useState("")


    function handleSupportFormSubmit(e) {
        e.preventDefault()
    }

    function handleTitleChange(e) {
        setTitleMessage(e.target.value)
    }

    function handleEmailChange(e) {
        setEmailMessage(e.target.value)
    }

    function handleMessageChange(e) {
        setMessage(e.target.value)
    }

    return (
        <div className='support'>
            <h2>Tem Alguma dúvida? Mande uma mensagem para o nosso Suporte.</h2>

            <form onSubmit={handleSupportFormSubmit} className='support-form'>
                <input 
                    type="text"
                    placeholder='Título'
                    value={titleMessage}
                    onChange={handleTitleChange}
                />
                
                <input
                    type="text"
                    placeholder='E-mail'
                    value={emailMessage}
                    onChange={handleEmailChange}
                />
                
                <textarea 
                    cols="30"
                    rows="15"
                    placeholder='Mensagem'
                    value={message}
                    onChange={handleMessageChange}
                />

                <button>Enviar</button>
            </form>
        </div>
    );
}
