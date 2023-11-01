import styles from './Home.module.css'
import gray from '../../assets/gray.png'
import LinkButton from '../layout/LinkButton';
import genshin from '../../assets/genshin_data.json'

function Home() {
    const randomChar = genshin.data[Math.floor(Math.random()*genshin.data.length)].name;
    return ( 
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Projetinhos</span>!</h1>
            <p>Comece a gerenciar seu Genshin agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={gray} alt="It's Gray" />
            <p>Hm... Estou pensando em {randomChar}...</p>
        </section>
        );
}
export default Home;