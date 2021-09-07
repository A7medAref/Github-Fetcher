import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { MyProvider } from './context/gitContext';
import { Auth0Provider } from "@auth0/auth0-react";
// 
// 
ReactDOM.render(<Auth0Provider
    domain="dev-ykl02keu.us.auth0.com"
    clientId="1uprnpugefAYWekWrQvnZLMe0OTpja5H"
    redirectUri={window.location.origin}><MyProvider><BrowserRouter><App /></BrowserRouter></MyProvider></Auth0Provider>, document.getElementById('root'));
