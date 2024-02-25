import React, { useRef } from 'react';
import './App.css'
// import { Toast } from 'primereact/toast';
// import { ConfirmDialog } from 'primereact/confirmdialog';
import AppRoutes from './routes';
import './assets/style.scss'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const toast = useRef(null);

  return (
    <div className="app">
      <AppRoutes toast={toast} />
      {/* <ConfirmDialog /> 
      <Toast ref={toast} position="bottom-right" /> */}
    </div>
  );
}

export default App;
