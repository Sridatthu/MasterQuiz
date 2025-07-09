import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Body from './components/Body'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import Quiz from './components/Quiz'
import { Provider } from "react-redux"
import appStore from './utils/appStore'
import Notes from './components/Notes'
import Exam from './components/Exam'
import Result from './components/Result'
const App = () => {
return(
  <>
  <Provider store={appStore}>
  <BrowserRouter basename="/">
  <Routes>
    <Route path='/' element={<Body/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/quiz' element={<Quiz/>}></Route>
      <Route path="/exam/:lang" element={<Exam />} />
      <Route path='/notes' element={<Notes/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/quiz' element={<Quiz/>}></Route>
      <Route path='/result' element={<Result/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
  </Provider>
  </>
)
}

export default App
