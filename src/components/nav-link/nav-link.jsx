import './nav-link.css'

export default function NavLink(props) {
    return (
        <a href={props.link}><h2 className={props.class}>{props.title}</h2></a>
    )
}