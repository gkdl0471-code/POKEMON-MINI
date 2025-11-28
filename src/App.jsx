import { useEffect } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'
import Main from './pages/Main'
import Search from './pages/Search'
import Favorite from './pages/Favorite'


function App() {
  const ditpatch = useDispatch()

  useEffect(() => {
    ditpatch(fetchMultiplePokemonById(151))
  }, [])

  return (
    <>
      <header className='flex justify-center items-center gap-5'>
        <img className='w-[100px]' src="src/img/포켓볼.png"/>
        <h1 className='text-[50px] text-center '>포켓몬 도감</h1>
      </header>
      <nav className='flex gap-10 justify-center '>
        <Link to={'/'}>메인</Link>
        <Link to={'/detail/1'}>상세정보</Link>
        <Link to={'/search'}>검색</Link>
        <Link to={'/favorite'}>찜목록</Link>
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
