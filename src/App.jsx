import { useEffect } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Detail from './pages/Detail'
import Main from './pages/Main'
import Search from './pages/Search'
import Favorite from './pages/Favorite'


function App() {
  const navigate = useNavigate()
  const ditpatch = useDispatch()

  useEffect(() => {
    ditpatch(fetchMultiplePokemonById(898))
  }, [])

  return (
    <>
      <header className='flex justify-center items-center gap-5 '>
        <img className='w-[100px] -translate-y-12' src="src/img/포켓볼.png"/>
        <h1 className='text-[70px] text-center -translate-y-12'>포켓몬 도감</h1>
      </header>
      <nav className='flex gap-10 justify-center items-center -translate-y-9'>
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜목록</Link>
        <input
          onChange={e=> navigate(`/search?pokemon=${e.target.value}`)}
          placeholder="🔍 POKEMON SEARCH"
          className="
              w-62
              text-white
              placeholder-gray-500
              border-b
              border-gray-600
              focus:outline-none
              focus:border-emerald-400
              py-2
            "
          />
      </nav>
      <main className='flex flex-wrap gap-5 justify-center pt-5 px-[120px]'>
        <Routes>
          <Route path={'/'} element={ <Main/> }/>
          <Route path={'/detail/:pokemonId'} element={ <Detail /> }/>
          <Route path={'/search'} element={ <Search /> }/>
          <Route path={'/favorite'} element={ <Favorite /> }/>
        </Routes>
      </main>
    </>
  )
}

export default App
