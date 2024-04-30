import {Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Pokedexx from './pages/Pokedexx'
import PokeInfo from './pages/PokeInfo'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  return (
    <div>
    <h1>Pokedex</h1>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route element={<ProtectedRoutes/>}>
      <Route path='/pokedex' element={<Pokedexx/>}/>
      <Route path='/pokedex:id' element={<PokeInfo/>}/>
      </Route>
    </Routes>
    </div>  
  )
}

export default App
