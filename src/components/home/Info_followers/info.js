import './info.css';
export default function UserFollower(prop)
{
    return <div className='UserFollower'>
        <div className="small">
            {prop.type}
        </div>
        <div className={`mainCard  ${prop.type==='User' ? 'u' : 'f'}`}>
            {prop.children}
        </div>
    </div>
}