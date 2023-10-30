import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import UpdateForm from '../updates/UpdateForm';
import UpdateCard from '../updates/UpdateCard';
import Message from '../layout/Message';
import ProjectInfo from '../project/ProjectInfo';

import styles from './Project.module.css'

function Project() {
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [updates, setUpdate] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    console.log(project);
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                    setUpdate(data.updates)
                })
                .catch((err) => console.log(err))
        }, 1000)
    }, [id])
    function editPost(project) {
        setMessage('')

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projetinho atualizado!')
            setType('success')
        })
        .catch((err) => console.log(err))

    }

    function createUpdate(project) {
        setMessage('')
        const lastUpdate = project.updates[project.updates.length - 1]
        lastUpdate.id = uuidv4()
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setShowUpdateForm(false)
        })
        .catch((err) => console.log(err))
    }
    function removeUpdate(id) {
        setMessage('')
        const updatesUpdated = project.updates.filter(
            (update) => update.id !== id
        )
        const projectUpdated = project
        projectUpdated.updates = updatesUpdated

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        }).then((resp) => resp.json())
        .then((data) => {
            setProject(projectUpdated)
            setUpdate(updatesUpdated)
            setMessage('Atualização removida com sucesso!')
            setType('success')
        })
        .catch((err) => console.log(err))
    }
    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }
    function toggleUpdateForm() {
        setShowUpdateForm(!showUpdateForm)
    }

    return (<>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass="column">
                    {message && <Message type={type} text={message}/>}
                    <div className={styles.details_container}>
                        <h1>Projetinho: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <ProjectInfo project={project}/>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <ProjectForm
                                    handleSubmit={editPost}
                                    btnText="Salvar"
                                    projectData={project}/>
                            </div>
                        )}
                    </div>
                    <div className={styles.update_form_container}>
                        <h2>Registrar uma atualização: </h2>
                        <button className={styles.btn} onClick={toggleUpdateForm}>
                            {!showUpdateForm ? 'Adicionar' : 'Fechar'}
                        </button>
                        <div className={styles.project_info}>
                            {showUpdateForm && (
                                <UpdateForm
                                handleSubmit={createUpdate}
                                textBtn="Registrar"
                                projectData={project}
                                />
                            )}
                        </div>
                    </div>
                    <h2>Atualizações</h2>
                    <Container customClass="start">
                        {updates.length > 0 &&
                            updates.map((Update) => (
                                <UpdateCard 
                                    id={Update.id}
                                    name={Update.title}
                                    date={Update.date}
                                    description={Update.description}
                                    key={Update.id}
                                    handleRemove={removeUpdate}
                                />
                            ))
                        }
                        {updates.length === 0 && <p>Não há atualizações cadastradas.</p>}
                    </Container>
                </Container>
            </div>
        ): (
            <Loading/>
        )}
    
    </>)
}

export default Project;
