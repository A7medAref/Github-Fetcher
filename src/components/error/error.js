import { useHistory } from 'react-router-dom';
import './error.css';
function ErrorPage()
{
    const history = useHistory();
    return (<main className='errorPage'>
        <h1>error 404</h1>
        <p>This page doesn't exist</p>
        <button className='btn btn-error' onClick={_=>{history.push('/')}}>main page</button>
    </main>)
}
export default ErrorPage;