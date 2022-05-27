import './add-asset.styles.scss'

import { useState, useEffect, useContext } from 'react'
import { AssetsContext } from '../../contexts/assets.context'

const AddAssetComponent = () => {

    const [newAsset, setNewAsset] = useState({})
    const { showAddNewAssetComponent, toogleAssetComponent } = useContext(AssetsContext)

    const inputsHandler = (event) => {
        const tempAsset = {...newAsset}
        tempAsset[event.target.name] = event.target.value;
        setNewAsset(tempAsset)
    }

    const submitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <>
            {
                showAddNewAssetComponent ? (
                    <>
                        <div className='background'></div>
                        <div className='add-asset-component-container'>
                            <div className='add-asset-component'>
                                <form className='add-asset-form'>
                                    <span className='close-cross-icon' onClick={toogleAssetComponent}>&#10539;</span>
                                    <h2 className='add-asset-title'>Add New Asset</h2>
                                    <div className='input-detail'>
                                        <label htmlFor='item-name'>Item Name: </label>
                                        <input type="text" name='item-name' onChange={(event) => inputsHandler(event)} required/>
                                    </div>
                                    <div className='input-detail'>
                                        <label htmlFor='stock-quantity'>Stock Quantity: </label>
                                        <input type="number" name='stock-quantity' onChange={(event) => inputsHandler(event)} required/>
                                    </div>
                                    <div className='input-detail'>
                                        <label htmlFor='reserved-quantity'>Reserved Quantity: </label>
                                        <input type="number" name='reserved-quantity' onChange={(event) => inputsHandler(event)} required/>
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

export default AddAssetComponent