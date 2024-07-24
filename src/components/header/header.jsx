import NavLink from "../nav-link/nav-link"
import { links } from '../../data.js'
import './header.css'


export default function Header() {
    return (
        <nav>
            <NavLink title={links[0].title} link={links[0].link} class={links[0].class} />
            <NavLink title={links[1].title} link={links[1].link} class={links[1].class} />
            <NavLink title={links[2].title} link={links[2].link} class={links[2].class} />
        </nav>
    )
}