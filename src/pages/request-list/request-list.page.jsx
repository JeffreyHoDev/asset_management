import './request-list.styles.scss'

const RequestListPage = () => {
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
                <div className='request'>
                    <span>1</span>
                    <span>John Cena</span>
                    <span>Project John</span>
                    <span>24/5/2022</span>
                    <span>26/5/2022</span>
                    <button>Details</button>
                    <div className='request-list-actions-container'>
                        <button>Approve</button>
                        <button>Reject</button>
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default RequestListPage