import './style.css'


export default function Completion (props) {
    const { completion } = props
    return (
        <div className="completion">
            <h1>Completion</h1>
            <p>{ completion }</p>
        </div>
    )
}