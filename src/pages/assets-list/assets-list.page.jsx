import './assets-list.styles.scss'
import ITEM_LIST from '../../custom-data/item-list'
import AddAssetComponent from '../../components/add-asset-component/add-asset.component'

import { useContext } from 'react'
import { AssetsContext } from '../../contexts/assets.context'

const AssetsListPage = () => {
    const { toogleAssetComponent } = useContext(AssetsContext)
    return (
        <>
            <AddAssetComponent />
            <div className='assets-list-page-container'>
                <h2>Assets List Page</h2>
                <button onClick={toogleAssetComponent}>Add Asset</button>
                <div className='assets-list'>
                    <div className='asset-header'>
                        <span>ID</span>
                        <span>Item Name</span>
                        <span>Stock Quantity</span>
                        <span>Reserved Quantity</span>
                        <span>Created Date</span>
                        <span>Action</span>
                    </div>
                    {
                        ITEM_LIST.map((item, idx) => {
                            return (
                                <div className='asset' key={idx}>
                                    <span>{idx}</span>
                                    <span>{item.name}</span>
                                    <span>{item.stock_quantity}</span>
                                    <span>2</span>
                                    <span>20/6/2022</span>
                                    <div>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default AssetsListPage