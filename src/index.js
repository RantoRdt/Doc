import React from 'react';
import ReactDOM from 'react-dom/client';
import  ReactDOMServer from 'react-dom/server';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const downloadHTML = () =>{
  const htmlString = ReactDOMServer.renderToStaticMarkup(<App/>)
  const blob = new Blob([htmlString], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'doc.html'
  a.click()
  URL.revokeObjectURL(url)
}
root.render(
  <React.StrictMode>
    {/*<button onClick={downloadHTML}>Télécharger</button>*/}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
