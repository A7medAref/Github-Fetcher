import useGlobal from "../../../context/gitContext"
import UserFollower from "./info"
export default function Followers()
{
    const data = useGlobal();
    return <UserFollower type = "Followers">
    {data.followers.map(e=><div key={e.id} className='follower'>
        <img src={e.avatar_url} alt={e.login}></img>
        <div>
            <span>{e.login}</span>
            <span onClick={_=>{window.open(e.html_url)}}>{e.html_url}</span>
        </div>
    </div>)}
    </UserFollower>
}