import TeamCard from "../team-card/team-card"
import { card } from '../../data.js'
import './teams-wrapper.css'

export default function TeamsWrapper() {
    return (
        <div className="your-teams" >
            <TeamCard title={card[0].title} class={card[0].class} link={card[0].link} />
        </div >
    )
}