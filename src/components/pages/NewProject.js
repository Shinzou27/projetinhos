import {useNavigate} from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm';
function NewProject() {

    const navigate = useNavigate()
    function createProject(project) {
        project.updates = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })
            })
            .catch((err) => console.log(err))
    }
    return ( 
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar as atualizações</p>
            <ProjectForm handleSubmit={createProject} btnText="Criar Projeto"/>
        </div>
        );
}

export default NewProject;