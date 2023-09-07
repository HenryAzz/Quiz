import { useState } from 'react'

import {User} from './components/User'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Options} from './components/Options'


import viteLogo from '/vite.svg'
import './App.css'
import { Quiz } from './components/Quiz';

function App() {
  const [count, setCount] = useState(0)

  // console.log(location)
  return (
   <Router>
    
    <Switch>
        <Route path="/:quiz">
        <Quiz></Quiz>
        </Route>
        <Route path="/">
          <>
              <User ></User>
               <Options></Options>
       </>
          </Route>
        </Switch>
   </Router>
  )
}

export default App
