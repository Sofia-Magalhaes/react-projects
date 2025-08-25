import './App.css'
// Link entre páginas - está no app, pq é informação que se repete
import Navbar from './routes/Navbar'

import { Outlet } from 'react-router-dom'


function App() {


  return (
    <div className='App'>
      <Navbar/>
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
