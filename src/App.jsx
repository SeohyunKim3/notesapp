import React from 'react'
import Navigation from './components/navigation'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Books from './pages/books'
import Interpretations from './pages/interpretations'
import ContactUs from './pages/contact-us'
import Login from './pages/login'
import Home from './pages/home'
import Landing from './pages/landing'
import Footer from './components/footer'


import PageRenderer from './page-renderer'

function App() {

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/:page" component={PageRenderer}/>
          <Route element={<Books/>} path="/books"/>
          <Route element={<Interpretations/>} path="/interpretations"/>
          <Route element={<ContactUs/>} path="/contact-us"/>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Landing/>} path="/"/>
          <Route element={<Home/>} path="/landing"/>
          <Route path="/" render={() => <Navigate to="/home"/>} />
          <Route component={() => 404} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
