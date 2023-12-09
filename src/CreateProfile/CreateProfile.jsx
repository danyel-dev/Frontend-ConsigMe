import './createProfile.scss'


export default function CreateProfile() {
    return(
        <div className='create-profile'>
            <h1>O primeiro passo para se tornar um(a) revendedor(a) na nossa plataforma é criar um perfil de revendedor(a), preencha os campos abaixo e comece seu trabalho ;/</h1>

            <form className='create-profile-form'>
                <input type="text" placeholder='nome da loja' />
                <input type="email" placeholder='email profissional' />
                <input type="text" placeholder='Celular' />
                <input type="text" placeholder='CPF' />
                <input type="text" placeholder='CEP' />
                <input type="text" placeholder='Estado' />
                <input type="text" placeholder='Cidade' />
                <input type="text" placeholder='Bairro' />
                <input type="text" placeholder='Rua' />
                <input type="number" placeholder='Número' />
                <input type="email" placeholder='Complemento' />
            </form>
        </div>
    );
}
