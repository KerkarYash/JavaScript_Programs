import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//this file sets up react and displays on the website. like we were doing this in our previous codes:
/*
const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(button);
*/

/*It wraps the App component in Strictmode, strictmode gives us some additional checks and warnings when developing our app. */