import './add-project.styles.scss'

import { useState, useEffect, useContext } from 'react'
import { ProjectsContext } from '../../contexts/projects.context'

const AddProjectComponent = () => {

    const [newProject, setNewProject] = useState({})
    const { showAddNewProjectComponent, toogleHandler } = useContext(ProjectsContext)

    const inputsHandler = (event) => {
        const tempProject = {...newProject}
        tempProject[event.target.name] = event.target.value;
        setNewProject(tempProject)
    }

    const submitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <>
            {
                showAddNewProjectComponent ? (
                    <>
                        <div className='background'></div>
                        <div className='add-project-component-container'>
                            <div className='add-project-component'>
                                <form className='add-project-form'>
                                    <span className='close-cross-icon' onClick={toogleHandler}>&#10539;</span>
                                    <h2 className='add-project-title'>Add New Project</h2>
                                    <div className='input-detail'>
                                        <label htmlFor='project-name'>Project Name: </label>
                                        <input type="text" name='project-name' onChange={(event) => inputsHandler(event)} required/>
                                    </div>
                                    <div className='input-detail'>
                                        <label htmlFor='custom-project-code'>Custom Project Code: </label>
                                        <input type="text" name='custom-project-code' onChange={(event) => inputsHandler(event)} required/>
                                    </div>
                                    <button type="submit" onSubmit={submitHandler}>Save</button>
                                </form>
                            </div>
                        </div>
                    </>
                ) : null
            }
        </>
    )
}

export default AddProjectComponent