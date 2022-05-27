import { createContext, useState } from "react";

export const AssetsContext = createContext({
    assetsList: null,
    showAddNewAssetComponent: false,
    toogleShowAddNewAssetComponent: () => {}
})

export const AssetsProvider = ({children}) => {

    const [assetsList, setAssetsList] = useState(null)
    const [showAddNewAssetComponent, toogleShowAddNewAssetComponent] = useState(false)

    const toogleAssetComponent = () => {
        toogleShowAddNewAssetComponent(!showAddNewAssetComponent)
    }

    const value = {assetsList, showAddNewAssetComponent, toogleAssetComponent}
    return (
        <AssetsContext.Provider value={value}>{children}</AssetsContext.Provider>
    )
}