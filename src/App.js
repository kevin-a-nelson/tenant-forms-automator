import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import TenantForm from './Components/TenantForm';

const App = () => (
  <div>
    <div style={{ width: "700px", margin: "0px auto"}}>
      <PDFViewer style={{
            width: '700px',
            height: '100vh',
            margin: "0px auto"
          }}>
        <TenantForm />
      </PDFViewer>
    </div>
  </div>
);

export default App

ReactDOM.render(<App />, document.getElementById('root'));