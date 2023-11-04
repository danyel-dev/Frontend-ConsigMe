import { useState } from 'react';
import './contact.css'
import axios from 'axios';


export default function Contact() {
    const [titleMessage, setTitleMessage] = useState("")
    const [emailMessage, setEmailMessage] = useState("")
    const [Message, setMessage] = useState("")

    const [formError, setFormError] = useState("")


    function handleSupportFormSubmit(e) {
        e.preventDefault()

        const config = {
            heades: {
                "Content-Type": "application/json"
            }
        }

        axios.post("http://127.0.0.1:8000/messages/", {
            title: titleMessage,
            email: emailMessage,
            message: Message
        }, config).then(response => {
            setFormError("Sua mensagem foi enviada ao nosso suporte!")
        }).catch(response => {
            setFormError(true)
        })

        setTitleMessage("")
        setEmailMessage("")
        setMessage("")
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

            {formError === true? 
                <p className='error-message'>Falha no envio, todos os campos devem ser preenchidos!</p> : 
                <p className='success-message'>{formError}</p> 
            }        

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
                    value={Message}
                    onChange={handleMessageChange}
                />

                <button>Enviar</button>
            </form>
        </div>
    );
}
