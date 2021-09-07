import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import backgroundImage from '../../imgs/background.png';
import './reception.css';
function Reception()
{
    const auth = useAuth0();
    const history = useHistory();
    if(auth.user)
        history.push('/');
    return(<section className='body-center'>
        <div>
            <div><img className="startingImg" src={backgroundImage} alt="normal img"/></div>
            <div><button className='btn btnR' onClick={_=>{auth.loginWithRedirect()}}>Log In</button></div>
        </div>
    </section>)
}
export default Reception;