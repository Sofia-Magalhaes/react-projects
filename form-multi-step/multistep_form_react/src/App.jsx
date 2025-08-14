// Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'

import './App.css'

function App() {

  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulario abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="inputs-container"></div>
          <div className="action">
            <button type='button'>
              <GrFormPrevious/>
              <span>Voltar</span>
            </button>
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext/>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
