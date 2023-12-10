import './createProfile.scss'


export default function CreateProfile() {
    return(
        <div className='create-profile'>
            <h1>O primeiro passo para se tornar um(a) revendedor(a) na nossa plataforma é criar um perfil de revendedor(a), preencha os campos abaixo e comece seu trabalho ;/</h1>

            <form className='create-profile-form'>
                <input type="text" placeholder='Nome da loja' />
                <input type="email" placeholder='Email profissional' />
                
                <div>
                    <input type="text" placeholder='Celular' />
                    <input type="text" placeholder='CPF' />
                </div>
                
                <div>
                    <input type="text" placeholder='CEP' />
                    <input type="text" placeholder='Estado' />
                </div>
                
                <div>
                    <input type="text" placeholder='Cidade' />
                    <input type="text" placeholder='Bairro' />
                </div>
                
                <div>
                    <input type="text" placeholder='Rua' />
                    <input type="number" placeholder='Número' />
                </div>
                
                <input type="email" placeholder='Complemento' />

                <button>Enviar</button>
            </form>
        </div>
    );
}
