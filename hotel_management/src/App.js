import "./App.css"
// import Navbar from "./components/navbar/Navbar.js";
import Home from "./componentss/pages/Home.js"
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom"
import About from "./componentss/About/About"
import Gallery from "./componentss/Gallery/Gallery.js"
// import Destinations from './componentss/Destination'
import SinglePages from './componentss/singlepage/SinglePages.js'

function App()
{
  return(
    <>
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route path='/'exact componentss = {Home}></Route>
        <Route path='/about'exact componentss = {About}></Route>
        <Route path='/gallery'exact componentss = {Gallery}></Route>
        {/* <Route path='/destination'exact componentss = {Destinations}></Route> */}
        <Route path='/singlepage/:id'exact componentss = {SinglePages}></Route>
      </Switch>
    </Router>
    </>
  )
}

