import {BsFillTrashFill} from 'react-icons/bs'

import styles from '../project/ProjectCard.module.css'

function UpdateCard({id, name, date, description, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return ( 
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>{date}</p>
            <br />
            <hr />
            <br />
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill/>
                    Excluir
                </button>
            </div>
        </div>
        );
}

export default UpdateCard;