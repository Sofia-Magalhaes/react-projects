import './App.css'
// Link entre páginas - está no app, pq é informação que se repete
import Navbar from './components/Navbar'

import { Outlet } from 'react-router-dom'
import SearchForm from './components/SearchForm'


function App() {


  return (
    <div className='App'>
      <Navbar />
      <SearchForm />
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
