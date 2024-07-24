import './check-list.css'

export default function CheckList() {
    return (
        <div className='check-list-wrapper'> {/* Wrap everything in a <div> or similar */}
            <svg width="48" height="48" className="svg-check-list" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="white" />
                <path d="M9.00005 6H20M3.80005 5.8L4.60005 6.6L6.60005 4.6M3.80005 11.8L4.60005 12.6L6.60005 10.6M3.80005 17.8L4.60005 18.6L6.60005 16.6M9.00005 12H20M9.00005 18H20" stroke="#2A2A2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h2 className="check-list-text">Check list</h2>
        </div>
    );
}