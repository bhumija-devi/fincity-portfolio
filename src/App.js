import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import PageNotFound from './components/NotFound';
import { ProjectProvider } from './components/ProjectContext';
import './App.css';

function App() {
  return (
    
    <BrowserRouter>
  <ProjectProvider>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/projects' element={<Projects />} />
      <Route path='*' Component={PageNotFound}/>
    </Routes>
  </ProjectProvider>
</BrowserRouter>
    
  );
}

export default App;
