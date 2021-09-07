import React, {useContext, useEffect, useState} from 'react';
import Followers from './mockData.js/mockFollowers';
import Repos from './mockData.js/mockRepos';
import User from './mockData.js/mockUser';
const rootUrl = 'https://api.github.com';
const context = React.createContext({
    followers:[],user:[],repos:[],loading:false,requests:0,error:{is:false,type:''},firstLoading:true,setFirstLoading:_=>{},setfollowers:_=>{},setUser:_=>{},setRepos:_=>{},setLoading:_=>{},fetchRequests:_=>{},toggleError:_=>{}});
export function MyProvider({children})
{
    const [followers,setfollowers] = useState(Followers);
    const [user,setUser] = useState(User);
    const [repos,setRepos] = useState(Repos);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState({is:false});
    const [requests,setRequests] = useState(0);
    const [firstLoading,setFirstLoading] = useState(true);
    function fetchRequests()
    {
        setLoading(true)
        fetch(rootUrl+'/rate_limit').then(res=>res.json()).then(data=>{setRequests(data.rate.remaining)}).then(_=>{setLoading(false)});
    }
    useEffect(fetchRequests,[])
    function toggleError(is,type)
    {
        if(is)
            setError({is,type});
        else
            setError({is});
    }
    const init = {
        followers,user,repos,loading,requests,error,firstLoading,setFirstLoading,setfollowers,setUser,setRepos,setLoading,fetchRequests,toggleError
    }
    return <context.Provider value={init}>{children}</context.Provider>
}
export default function useGlobal()
{
    return useContext(context);
}