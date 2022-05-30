import './request-list.styles.scss'
import { useContext } from 'react'
import { RequestListContext } from '../../contexts/request-list.context'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

const RequestListPage = () => {

    const { passItemToRequestDetailComponent, requestList } = useContext(RequestListContext) 

    return (
        <div className='request-list-page-container'>
            <h2>Request List Page</h2>
            <div className='request-list'>
                <div className='request-list-header'>
                    <span>Request ID</span>
                    <span>Requester</span>
                    <span>Project Name</span>
                    <span>Request Date</span>
                    <span>Request Collection Date</span>
                    <span>Details</span>
                    <span>Action</span>
                </div>
                {
                    requestList.length > 0 ? (
                        requestList.map(request => {
                            <div className='request'>
                                <span>1</span>
                                <span>OK</span>
                                <span>Test</span>
                                <span>24/5/2022</span>
                                <span>26/5/2022</span>
                                <button>Details</button>
                                <div className='request-list-actions-container'>
                                    <button>Approve</button>
                                    <button>Reject</button>
                                </div>      
                            </div>
                        })

                    ): null
                }
            </div>
        </div>
    )
}

export default RequestListPage