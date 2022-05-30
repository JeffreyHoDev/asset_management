import './App.css';

import AddAssetComponent from './components/add-asset-component/add-asset.component'
import Navigation from './components/navigation/navigation.component';


import RequestItemsPage from './pages/request-items/request-items.page';
import ProjectCodesPage from './pages/project-codes/project-codes.page';
import RequestListPage from './pages/request-list/request-list.page';
import AssetsListPage from './pages/assets-list/assets-list.page'

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/request-items-page' element={<RequestItemsPage />}></Route>
        <Route path='/project-codes-page' element={<ProjectCodesPage />}></Route>
        <Route path='/request-list-page' element={<RequestListPage />}></Route>
        <Route path='/assets-list-page' element={<AssetsListPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
