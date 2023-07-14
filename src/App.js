import { useState, useEffect } from "react";
import recipeContext from "./components/context";
import Calorie from './pages/calorie'
import Dite from './pages/dite'
import Home from './pages/home'
import Nav from "./components/nav";
import { Routes, Route } from "react-router-dom";


function App() {
  let app_key = 'c673dbff151ac14e9a6f38a5f5666fb3'
  let app_id = '484fbcf6'

  let [search, setSearch] = useState('Indian')
  let [user, setUser] = useState(null)
  useEffect(() => {
    setUser(localStorage.getItem('email'))
  }, [])

  return (
    <recipeContext.Provider value={{ search, setSearch, user, setUser, app_id, app_key }}>

      <div className="App" style={{ maxWidth: '1200px', marginInline: 'auto' }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calorie' element={<Calorie />} />
          <Route path='/diet' element={<Dite />} />
        </Routes>

      </div>
    </recipeContext.Provider>
  );
}

export default App;
