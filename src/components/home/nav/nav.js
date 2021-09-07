import { useAuth0 } from '@auth0/auth0-react';
import './nav.css';
export function Nav()
{
    const auth = useAuth0();
    let name = null;
    if(!auth.isLoading && auth.isAuthenticated)
    {
        const Name = auth.user.name;
        const index = Name.indexOf('@');
        name = index === -1 ? Name : Name.slice(0,index); 
    }
    return (
        <section className="nav">
            <p>welcome, <span>{name}</span></p>
            <h2 onClick={_=>{auth.logout({returnTo:window.location.origin})}}>Logout</h2>
        </section>
    )
}