import './team-card.css'

export default function TeamCard(props) {
    return (
        <div className="team-card">
            <div>
                <a href={props.link} className={props.class}>{props.title}</a>
            </div>
            <p>Текст</p>
        </div>
    )
}