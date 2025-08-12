import './MyForm.css'

import { useEffect, useState } from 'react'

const MyForm = () => {
    // Gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) =>{
        setName(e.target.value)
    }

    console.log(name);
    

    return (
        <div>
            {/* Criação do form */}
            <form>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleName} />
                </div>
                {/* Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    <input type="text" name="email" placeholder='Digite o seu e-mail' />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm