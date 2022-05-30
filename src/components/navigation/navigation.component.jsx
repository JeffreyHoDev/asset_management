import './navigation.styles.scss'

import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='navigation-container'>
            <span>Home</span>
            <Link to='/assets-list-page'>Assets List</Link>
            <Link to='/project-codes-page'>Project Codes</Link>
            <Link to='/request-items-page'>Request Items</Link>
            <Link to='/request-list-page'>Request List</Link>
        </div>
    )
}

export default Navigation