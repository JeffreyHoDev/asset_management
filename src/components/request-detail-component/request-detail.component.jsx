import './request-detail.styles.scss'
import { useContext } from 'react'
import { RequestListContext } from '../../contexts/request-list.context'

const RequestDetailComponent = () => {
    const {showRequestDetailComponent, toogleHandler} = useContext(RequestListContext)
    return (
        <>
            {
                showRequestDetailComponent ? (
                    <>
                    <div className='background'></div>
                    <div className='request-detail-component-container'>
                        <div className='request-detail-component'>

                        </div>
                    </div>
                    </>
                ): null
            }
        </>
    )
}

export default RequestDetailComponent