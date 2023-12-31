import {FaTwitter, FaDiscord} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return ( 
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaTwitter/>
                </li>
                <li>
                    <FaDiscord/>
                </li>
            </ul>
            <p className={styles.copyright}>
                <span>Projetinhos</span> &copy; 2023
            </p>
        </footer>
        );
}

export default Footer;