import { createContext, useState } from "react";

export const ProjectsContext = createContext({
    projectsList: {},
    showAddNewProjectComponent: false,
    toogleShowAddNewProjectComponent: () => {}

})

export const ProjectsProvider = ({children}) => {

    const [showAddNewProjectComponent, toogleShowAddNewProjectComponent] = useState(false)

    const toogleHandler = () => {
        toogleShowAddNewProjectComponent(!showAddNewProjectComponent)
    }

    const value = { showAddNewProjectComponent, toogleHandler }

    return (
        <ProjectsContext.Provider value={value} >{children}</ProjectsContext.Provider>
    )
}