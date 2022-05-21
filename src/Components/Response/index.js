import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectLast, addPrompt, addResponse, concat } from '../ResponseList/responseListSlice'


export default function Response () {
    const dispatch = useDispatch()
    const promptResponse = useSelector(selectLast)
    
    const getResponse = () => {
        // await api call
        // 
    }

    return (
        <div id="Response">
            <h1>Response</h1>
        </div>
    )
}