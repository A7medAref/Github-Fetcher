import { Nav } from "./nav/nav";
import { SearchBar } from "./SearchBar/Search";
import {GoRepoClone,GoLogoGist} from 'react-icons/go';
import'./Home.css';
import useGlobal from "../../context/gitContext";
import {AiOutlineTeam} from 'react-icons/ai';
import {IoPersonAddSharp} from 'react-icons/io5';
import './Charts/Charts.css';
import Card from "./cards/card";
import User from "./Info_followers/User";
import Followers from "./Info_followers/Follower";
import Pie from "./Charts/pie";
import Columns from "./Charts/columns";
import Donate from "./Charts/pie2";
import Bar from "./Charts/columns2";

export function Home()
{
    const data = useGlobal();
    const cardInfo = [
        {
            type:'Repos',
            amount:data.user.public_repos,
            icon:<GoRepoClone className="icon"/>
        },
        {
            type:'Followers',
            amount:data.user.followers,
            icon:<AiOutlineTeam className="icon"/>
        },
        {
            type:'Following',
            amount:data.user.following,
            icon:<IoPersonAddSharp className="icon"/>
        },
        {
            type:'Gists',
            amount:data.user.public_gists,
            icon:<GoLogoGist className="icon"/>
        }
    ]
    document.body.style.backgroundColor="#EEEEEE"; //normal style for this page;
    return(
        <>
            <Nav user={data.user.login}></Nav>
            {data.error.is && <div className='wrapper error'>{data.error.type}</div>}
            <div className="wrapper">
                <div className="row-2">
                    <SearchBar className="search-size"/>
                    <p title="represent number of requests you allow to send,it refreshes every hour">Requests: 20/{Math.ceil(data.requests/3)}</p>
                </div>
                {!data.loading && <><div className="Info4">
                    {cardInfo.map((e,i)=><Card key={i} amount={e.amount} type={e.type} icon={e.icon}></Card>)}
                </div>
                <div className="row4">
                    <User/>
                    <Followers/>
                </div>
                <div className='chartsHome'>
                    <Pie/>
                    <Columns/>
                </div>
                <div className='chartsHome'>
                    <Donate/>
                    <Bar/>
                </div></>}
                {data.loading && <div className="pos"><div className="sk-chase">
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                        </div></div>}
            </div>
        </>
    )
}