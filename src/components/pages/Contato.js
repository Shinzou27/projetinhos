import { BsGithub } from "react-icons/bs";
import styles from './Contato.module.css'
function Contato() {
    return (
        <div className={styles.about_us}>
            <h1>Encontre mais <span>projetinhos</span> como este em:</h1>
            <div>
                <a target="_blank" href="https://github.com/Shinzou27">
                    <BsGithub />/shinzou27
                </a>
            <hr />
            </div>
        </div>
    );
}

export default Contato;