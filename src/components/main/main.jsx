import './main.css';
import CheckList from '../check-list/check-list';
import TeamsWrapper from '../teams-wrapper/teams-wrappes';


export default function Main() {
    return (
        <div className='main'>
            <CheckList />
            <TeamsWrapper />
        </div>
    );
}