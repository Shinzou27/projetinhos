import { Link } from "react-router-dom";
import Container from "./Container";

import styles from './Navbar.module.css'
import logo from '../../assets/projetinhos_logo.png'

function Navbar() {
    return ( 
        <nav className={styles.navbar}>
        <Container>
            <Link to="/">
                <img src={logo} alt="Projetinhos"/>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/projects">Projetos</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/contato">Contato</Link>                    
                </li>
                <li className={styles.item}>
                    <Link to="/newproject">Novo Projeto</Link>            
                </li>
            </ul>
        </Container>
      </nav>
     );
}

export default Navbar;