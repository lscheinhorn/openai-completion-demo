import './style.css'
import Completion from '../Completion'

export default function Completions (props) {
   const { completions } = props

    return (
        <div id="Completions">
            <h1>Response List</h1>
            {
                completions.map(completion => <Completion completion={ completion } />)
            }
        </div>
    )
}