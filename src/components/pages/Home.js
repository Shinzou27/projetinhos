import styles from './Home.module.css'
import gray from '../../img/gray.png'
import LinkButton from '../layout/LinkButton';

function Home() {
    const characters = ["Albedo", "Alhaitham", "Aloy", "Amber", "Itto", "Baizhu", "Barbara", "Beidou", "Bennett", "Candace", "Chongyun", "Collei", "Cyno", "Dehya", "Diluc", "Diona", "Dori", "Eula", "Faruzan", "Fischl", "Freminet", "Ganyu", "Gorou", "Hu Tao", "Jean", "Kazuha", "Kaeya", "Ayaka", "Ayato", "Kaveh", "Keqing", "Kirara", "Klee", "Sara", "Kuki Shinobu", "Layla", "Lisa", "Lynette", "Lyney", "Mika", "Mona", "Nahida", "Neuvillette", "Nilou", "Ningguang", "Noelle", "Qiqi", "Raiden Shogun", "Razor", "Rosaria", "Kokomi", "Sayu", "Shenhe", "Heizou", "Sucrose", "Tartaglia", "Thoma", "Tighnari", "Traveler", "Venti", "Scaramouche", "Wriothesley", "Xiangling", "Xiao", "Xingqiu", "Xinyan", "Yae Miko", "Yanfei", "Yaoyao", "Yelan", "Yoimiya", "Yun Jin", "Zhongli", "Charlotte", "Furina"];
    const randomChar = characters[Math.floor(Math.random()*characters.length)];
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