import { useAuth0 } from "@auth0/auth0-react";
import { Redirect, Route } from "react-router-dom";

export default function Protector({children,...rest})
{
    const {user,isAuthenticated}= useAuth0();
    const isUser = user && isAuthenticated;
    return <Route {...rest} render={_=> isUser ?  children : <Redirect to="/login"/>} />
}