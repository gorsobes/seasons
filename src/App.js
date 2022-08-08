import { Route, Routes } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Summer from "./components/summer";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Autumn from "./components/autumn";
import Home from "./components/home";
import Winter from "./components/winter";
import Spring from "./components/spring";

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand ><Link to="/" className="nav-link">Времена года</Link></Navbar.Brand>
       
          <Nav className="me-auto">
          <Link to="/summer" className="nav-link">Лето</Link>
          <Link to="/autumn" className="nav-link">Осень</Link>
          <Link to="/winter" className="nav-link">Зима</Link>
          <Link to="/spring" className="nav-link">Весна</Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/summer" element={<Summer />} />
      <Route path="/autumn" element={< Autumn />} />
      <Route path="/winter" element={< Winter />} />
      <Route path="/spring" element={< Spring />} />
    </Routes>
    </>
  );
}

export default App;
