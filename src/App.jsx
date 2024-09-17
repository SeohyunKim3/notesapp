import React from 'react'
import Navigation from './components/navigation'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/home'
import Interpretations from './pages/interpretations'
import ContactUs from './pages/contact-us'
import Login from './pages/login'


import PageRenderer from './page-renderer'

function App() {

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/:page" component={PageRenderer}/>
          <Route element={<Home/>} path="/home"/>
          <Route element={<Interpretations/>} path="/interpretations"/>
          <Route element={<ContactUs/>} path="/contact-us"/>
          <Route element={<Login/>} path="/login"/>
          <Route path="/" render={() => <Navigate to="/home"/>} />
          <Route component={() => 404} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
