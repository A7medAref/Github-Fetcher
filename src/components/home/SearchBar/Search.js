import './Search.css';
import {AiOutlineSearch} from 'react-icons/ai';
import { useState } from 'react';
import useGlobal from '../../../context/gitContext';
export function SearchBar({className})
{
    const context = useGlobal();
    const [input,setInput] = useState('');
    const fetchData= async _=>{
        if(Number(context.requests) === 0)
        {
            context.toggleError(true,"You can't search for anyusers till the end of the hour");
        }
        else if(input.length === 0)
        {
            context.toggleError(true,"Please enter the username");
        }
        else{
        context.setLoading(true);
        context.toggleError(false);
        const res = await fetch(`https://api.github.com/users/${input}`);
        if(res.ok)
        {
            const data = await res.json();
            const fres = await fetch(`https://api.github.com/users/${input}/followers?per_page=100`);
            const followersData = await fres.json();
            const repos = await fetch(`https://api.github.com/users/${input}/repos?per_page=100`);
            const reposData = await repos.json();
            context.setUser(data);
            context.setRepos(reposData);
            context.setfollowers(followersData);
            context.fetchRequests();
        }
        else
        {
            context.toggleError(true,"The user doesn't exist please enter the correct Github username");
        }
        context.setLoading(false);}
    }
    function submitHandler(e)
    {
        e.preventDefault();
        fetchData();
    }
    return(
        <form className="searchBar" onSubmit={submitHandler}>
            <AiOutlineSearch className="signS"/>
            <input placeholder="Enter Github User" onChange={i=>{setInput(i.target.value)}} className={className}/>
            <button className="searchBTN">Search</button>
        </form>
    )
}