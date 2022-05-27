import './App.css';

import AddAssetComponent from './components/add-asset-component/add-asset.component'
import Navigation from './components/navigation/navigation.component';


import RequestItemsPage from './pages/request-items/request-items.page';
import ProjectCodesPage from './pages/project-codes/project-codes.page';
import RequestListPage from './pages/request-list/request-list.page';
import AssetsListPage from './pages/assets-list/assets-list.page'



function App() {
  return (
    <div className="App">
      <Navigation />
      <RequestItemsPage />
      {/* <ProjectCodesPage /> */}
      {/* <RequestListPage /> */}
      {/* <AssetsListPage /> */}
    </div>
  );
}

export default App;
