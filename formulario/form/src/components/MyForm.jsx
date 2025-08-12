import './MyForm.css'

import { useEffect, useState } from 'react'

const MyForm = ({ userName, userEmail }) => {
    // Gerenciamento de dados
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)
    const [bio, setBio] = useState("")

    const [role, setRole] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    // Envio de form
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, bio), role;

        // Validação
        // Envio

        // Limpar o form
        setName("")
        setEmail("")
        setBio("")
        setRole("")

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
                {/* Textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                {/* Select */}
                <label>
                    <span>Função do sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm