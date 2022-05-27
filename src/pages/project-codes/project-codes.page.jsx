import './project-codes.styles.scss'
import { useContext } from 'react'
import { ProjectsContext } from '../../contexts/projects.context'
import AddProjectComponent from '../../components/add-project-component/add-project.component'

const ProjectCodesPage = () => {

    const { toogleHandler } = useContext(ProjectsContext)


    return (
        <>
            <AddProjectComponent />
            <div className='project-codes-page-container'>
                <h1>Project Codes Page</h1>
                <button onClick={toogleHandler}>Add New Project</button>
                <div className='project-codes-list'>
                    <div className='project-codes-header'>
                        <span>ID</span>
                        <span>Custom Project Code</span>
                        <span>Project Name</span>
                        <span>Created Date</span>
                        <span>Action</span>
                    </div>
                    <div className='project-code'>
                        <span>1</span>
                        <span>XP012</span>
                        <span>Testing Project</span>
                        <span>23/5/2022</span>
                        <span>&#10539;</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectCodesPage