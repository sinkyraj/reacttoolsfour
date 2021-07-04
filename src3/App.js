import{
BrowserRouter as Router,
Route,
Switch,
Link

} from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'

const App = () => {

  return(

  <>
  {/* <h1>This is App Page</h1> */}
  <Router>
  <div>
    <div>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/profile'>Profile</Link>
    </div>
  <Switch>
  <Route exact path='/'>
  <Home />
  </Route>
  <Route path='/login'>
  <Login />
  </Route>

  <Route path='/profile'>
    <Profile />

  </Route>


  </Switch>

  </div>

  </Router>
  </>

  )

}

export default App