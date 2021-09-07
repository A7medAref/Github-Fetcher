import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";

export default function Wrapper({children})
{
    const {isLoading,error} = useAuth0();
    if(isLoading)
        return(<div className="pos2"><div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
    </div></div>)
    if(error)
        <Redirect to="/adfl;kfja"/>
    return children;
}