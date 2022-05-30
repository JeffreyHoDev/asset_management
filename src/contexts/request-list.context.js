import { createContext, useState } from "react";

export const RequestListContext = createContext({
    requestList: [],
    requestDetail: {},
    showRequestDetailComponent: false,
    toogleShowRequestDetailComponent: () => {}

})

export const RequestListProvider = ({children}) => {

    const [showRequestDetailComponent, toogleShowRequestDetailComponent] = useState(false)
    const [requestList, setRequestList] = useState([])
    const [requestDetail, setRequestDetail] = useState({})

    const toogleHandler = () => {
        toogleShowRequestDetailComponent(!showRequestDetailComponent)
    }

    const passItemToRequestDetailComponent = (item) => {
        setRequestDetail(item)
        toogleShowRequestDetailComponent(!showRequestDetailComponent)
    }

    const value = { showRequestDetailComponent, toogleHandler, passItemToRequestDetailComponent, requestList }

    return (
        <RequestListContext.Provider value={value} >{children}</RequestListContext.Provider>
    )
}