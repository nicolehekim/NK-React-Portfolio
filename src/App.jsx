import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from  './components/Footer';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import Navibar from './components/Navibar';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        {/* <Navibar /> */}
          <div className='container mt-10'>
            <Routes>
              <Route path='/' element={<About />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/project' element={<Project />}/>
              <Route path='/resume' element={<Resume />}/>
              <Route path='/contact' element={<Contact />}/>
            </Routes>
          </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
