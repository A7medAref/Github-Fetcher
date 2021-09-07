import './card.css';
export default function Card(prop)
{
    return(<div className="card">
        {prop.icon}
        <div>
            <span>{prop.amount}</span>
            <span>{prop.type}</span>
        </div>
    </div>)
}