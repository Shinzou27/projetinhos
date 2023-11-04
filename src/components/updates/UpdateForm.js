import styles from '../project/ProjectForm.module.css'
import SubmitButton from '../form/SubmitButton';
import Input from '../form/Input';
import { useState } from 'react';

function UpdateForm( { handleSubmit, textBtn, projectData }) {
    const [update, setUpdate] = useState({date: parseDate(Date('now'))})
    function parseDate(date) {
        const toFormat = new Date(date);
        let day;
        let month;
        toFormat.getDate() < 10 ? day = "0" + toFormat.getDate() : day = toFormat.getDate();
        toFormat.getMonth()+1 < 10 ? month = "0" + toFormat.getMonth()+1 : month = toFormat.getMonth()+1;
        return day + "/" + month + "/" + toFormat.getFullYear();
    }
    function submit(e) {
        e.preventDefault()
        projectData.updates.push(update)
        handleSubmit(projectData)
    }
    function handleChange(e) {
        setUpdate({...update, [e.target.name]: e.target.value})
    }


    return ( <form onSubmit={submit} className={styles.form}>
        <Input
            type="text"
            text="Título"
            name="title"
            placeholder="Insira um título para caracterizar a atualização"
            handleOnChange={handleChange}
        />
        <Input
            type="text"
            text="Descrição da atualização"
            name="description"
            placeholder="Descreva o que você fez"
            handleOnChange={handleChange}
        />
        <SubmitButton text={textBtn}/>
    </form> );
}

export default UpdateForm;