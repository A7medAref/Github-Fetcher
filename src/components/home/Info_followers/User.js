import useGlobal from "../../../context/gitContext";
import UserFollower from "./info";
import {GiPositionMarker} from 'react-icons/gi';
import {BiOutline,BiLinkAlt} from 'react-icons/bi';
export default function User()
{
    const data = useGlobal();
    return <UserFollower type="User">
    <div className="user">
        <div className="first">
            <img className="avatarImg" alt={data.user.login} src={data.user.avatar_url}></img>
            <div><span>{data.user.login}</span>
            <span>@{data.user.twitter_username}</span></div>
        </div>
        <button className="spBTN">follow</button>
    </div>
    <div className="bio">{!data.user.bio?<br></br>:data.user.bio}</div>
    <div className="states">
        <span><BiOutline/> {data.user.company}</span>
        <span><GiPositionMarker/> {data.user.location}</span>
        <div onClick={_=>{if(data.user.blog.length !== 0) window.open('http://'+ data.user.blog) }}><BiLinkAlt/> {data.user.blog}</div>
    </div>
    </UserFollower>
}