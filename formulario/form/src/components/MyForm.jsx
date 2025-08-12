import './MyForm.css'

import { useEffect, useState } from 'react'

const MyForm = ({userName, userEmail}) => {
    // Gerenciamento de dados
    const [name, setName] = useState(userName) 
    const [email, setEmail] = useState(userEmail)

    const handleName = (e) => {
        setName(e.target.value)
    }

    // Envio de form
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email);

    }

    // console.log(name, email);


    return (
        <div>
            {/* Criação do form */}
            {/* Envio de formualario */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder='Digite o seu nome'
                        onChange={handleName}
                        // Controlled Input
                        value={name}
                    />
                </div>
                {/* Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    <input type="text" name="email" placeholder='Digite o seu e-mail'
                        // simpliifcando manipulação
                        onChange={(e) => setEmail(e.target.value)}
                        // Controlled Input
                        value={email || ""}
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm