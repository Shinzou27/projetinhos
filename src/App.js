import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Contato from './components/pages/Contato';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Footer from './components/layout/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="minHeight">
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          <Route exact path="/projects" element={<Projects />} > </Route>
          <Route exact path="/contato" element={<Contato />} > </Route>
          <Route exact path="/newproject" element={<NewProject />} > </Route>
          <Route exact path="/project/:id" element={<Project />} > </Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
