import { FaUser, FaLock } from 'react-icons/fa'

const Login = () => {
    return (
        <div className="container">
            <form>
                <h1>Acesso o sitema</h1>
                <div>
                    <input type="email" placeholder='E-mail' />
                    <FaUser className='icon' />
                </div>
                <div>
                    <input type="password" placeholder='Senha' />
                    <FaLock className='icon' />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox"  />
                        Lembre de mim 
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>

                <div className="signup-link">
                    <p>Naõ tem uma conta? <a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login