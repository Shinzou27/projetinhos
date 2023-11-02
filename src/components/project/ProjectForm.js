import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css'
import CategoryForm from '../types/CategoryForm';

function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    const [progress, setProgress] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        if (progress) {
            handleSubmit(project)
        } else {
            setProgress(true);
        }
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }
    function handleSelect(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            },
        })
    }


    return (
        <form onSubmit={submit} className={styles.form}>
            {!progress ?
                <>
                    <Input
                        type="text"
                        text="Nome do Projeto"
                        name="name"
                        placeholder="Insira o nome do projeto"
                        handleOnChange={handleChange}
                        value={project.name ? project.name : ''}
                    />
                    <Select
                        name="category_id"
                        text="Selecione a categoria"
                        options={categories}
                        handleOnChange={handleSelect}
                        value={project.category ? project.category.id : ''}
                    />
                    <SubmitButton text={btnText} />
                </>
                :
                <>
                    <CategoryForm projectData={project} setProjectData={setProject} />
                    <SubmitButton text={"Finalizar"} />
                </>
            }
        </form >
    );
}

export default ProjectForm;