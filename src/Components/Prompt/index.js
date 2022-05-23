import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai"
import './style.css'

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);




export default function Prompt (props) {
    const { setCompletions } = props
    const [ prompt, setPrompt ] = useState("")
    const [ temp, setTemp ] = useState(0.5)


    const getResponse = async (prompt, temp) => {

        const response = await openai.createCompletion("text-curie-001", {
            prompt: prompt,
            temperature: temp,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
          const textResponse = response.data.choices[0].text
          return textResponse
    }

    const handlePromptChange = ({ target }) => {
        setPrompt(target.value)
    }

    const handleTempChange = ({ target }) => {
        const number = target.valueAsNumber
        setTemp(number)
    }

    const handleSubmit = async () => {
        const response = await getResponse(prompt, temp)
        setPrompt(response)
        setCompletions(prevState => [...prevState, `${prompt}\n\n${response}`])
    }
    
    return (
        <div id="Prompt">
            <h1>Prompt</h1>
            <textarea onChange={ handlePromptChange } value={ prompt } ></textarea>
            <input onChange={ handleTempChange } type="range" min="0" max="1" step="0.1" value={ temp }  ></input>
            <button type="button" onClick={ handleSubmit } >Submit</button>
        </div>
    )
}