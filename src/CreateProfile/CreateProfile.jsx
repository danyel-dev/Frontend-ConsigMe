import { useEffect, useState } from 'react'
import './createProfile.scss'
import axios from 'axios'
import Profile from '../Profile/Profile'


export default function CreateProfile() {
    const [profileCreated, setProfileCreated] = useState(true)
    const [userURL, setUserURL] = useState("")

    useEffect(() => {
        const URL = 'http://127.0.0.1:8000/userLogado/'

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            }
        }

        axios.get(URL, config).then(response => setUserURL(response.data[0].url))
    }, [])


    function useFormRegister(props) {
        const [values, setValues] = useState(props.initialValues)

        return {
            values,
            setValues,
            handleChangeForm: (e) => {
                const value = e.target.value
                const name = e.target.name
            
                setValues({
                    ...values,
                    [name]: value
                })
            },
            clearForm() {
                setValues({})
            }
        }
    }

    const useForm = useFormRegister({
        initialValues: {
            store_name: "", professional_email: "", phone_number: "",
            cpf: "", cep: "", state: "", city: "", district: "",
            street: "", house_number: "", complement: "", user: "", is_reseller: ""
        }
    })

    function handleSubmitForm(e) {
        e.preventDefault()

        const URL = 'http://127.0.0.1:8000/profile/'

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            }
        }
        
        useForm.values["user"] = userURL
        useForm.values["is_reseller"] = true
  
        axios.post(URL, useForm.values, config)
    }

    if(!profileCreated)
        return(
            <div className='create-profile'>
                <h1>O primeiro passo para se tornar um(a) revendedor(a) na nossa plataforma é criar um perfil de revendedor(a), preencha os campos abaixo e comece seu trabalho ;/</h1>

                <form className='create-profile-form' onSubmit={handleSubmitForm}>
                    <input 
                        type="text" placeholder='Nome da loja'
                        name='store_name' value={useForm.values.store_name}
                        onChange={useForm.handleChangeForm}
                    />
                    
                    <input
                        type="email" placeholder='Email profissional' 
                        name='professional_email' value={useForm.values.professional_email}
                        onChange={useForm.handleChangeForm}
                    />
                    
                    <div>
                        <input
                            type="text" placeholder='Celular' name='phone_number' value={useForm.values.phone_number} 
                            onChange={useForm.handleChangeForm}
                        />

                        <input
                            type="text" placeholder='CPF' 
                            name='cpf' value={useForm.values.cpf}
                            onChange={useForm.handleChangeForm}    
                        />
                    </div>
                    
                    <div>
                        <input
                            type="text" placeholder='CEP' 
                            name='cep' value={useForm.values.cep}
                            onChange={useForm.handleChangeForm} 
                        />

                        <input
                            type="text" placeholder='Estado'
                            name='state' value={useForm.values.state}
                            onChange={useForm.handleChangeForm}
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="text" placeholder='Cidade'
                            name='city' value={useForm.values.city}
                            onChange={useForm.handleChangeForm}
                        />

                        <input
                            type="text" placeholder='Bairro' 
                            name='district' value={useForm.values.district} onChange={useForm.handleChangeForm}    
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="text" placeholder='Rua' 
                            name='street' value={useForm.values.street}
                            onChange={useForm.handleChangeForm}
                        />

                        <input
                            type="number" placeholder='Número'
                            name='house_number' value={useForm.values.house_number}
                            onChange={useForm.handleChangeForm}
                        />
                    </div>
                    
                    <input
                        type="text" placeholder='Complemento'
                        name='complement' value={useForm.values.complement}
                        onChange={useForm.handleChangeForm}    
                    />

                    <button>Enviar</button>
                </form>
            </div>
        );
    return <Profile />
}
