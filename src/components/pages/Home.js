import styles from './Home.module.css'
import gray from '../../img/gray.png'
import LinkButton from '../layout/LinkButton';

function Home() {
    return ( 
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Projetinhos</span>!</h1>
            <p>Comece a gerenciar seus gachas agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={gray} alt="It's Gray" />
        </section>
        );
}

export default Home;