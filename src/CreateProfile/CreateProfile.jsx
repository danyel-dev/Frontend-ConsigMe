import { useState } from 'react'
import './createProfile.scss'


export default function CreateProfile() {
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
            store_name: "",
            professional_email: "",
            phone_number: "",
            cpf: "",
            birth_date: "",
            cep: "",
            state: "",
            city: "",
            district: "",
            street: "",
            house_number: "",
            complement: "",
        }
    })

    function handleSubmitForm(e) {
        console.log(useForm.values)
        
        e.preventDefault()
    }

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
                        name='birth_date' value={useForm.values.birth_date}
                        onChange={useForm.handleChangeForm} 
                    />

                    <input
                        type="text" placeholder='Estado'
                        name='cep' value={useForm.values.cep}
                        onChange={useForm.handleChangeForm}
                    />
                </div>
                
                <div>
                    <input 
                        type="text" placeholder='Cidade'
                        name='state' value={useForm.values.state}
                        onChange={useForm.handleChangeForm}
                    />

                    <input
                        type="text" placeholder='Bairro' 
                        name='city' value={useForm.values.city} onChange={useForm.handleChangeForm}    
                    />
                </div>
                
                <div>
                    <input 
                        type="text" placeholder='Rua' 
                        name='district' value={useForm.values.district}
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
}
