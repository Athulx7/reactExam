import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Components/Auth'
import MainDash from './Components/MainDash'
import Review from './Components/Review'
import Fav from './Components/Fav'
import ViewSpecific from './Components/ViewSpecific'

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth register = "register" />} />
      <Route path='/' element={<MainDash />} />
      <Route path='/review' element={<Review /> }/>
      <Route path='/fav' element={<Fav />} />

      <Route path='/view/:id' element={<ViewSpecific />} />
      

    </Routes>
    
    </>
  )
}

export default App
