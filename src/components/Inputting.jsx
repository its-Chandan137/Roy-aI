import React, {useState} from 'react'

function Inputting() {
    const [input,setInput] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(input != "")
        {
            setInput("");
        }
    }
  return (
    <div>
        <form onClick={handleSubmit}>
            <input type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder='Enter location...'
            />
            <button type='submit'>
                Add
            </button>
        </form>
    </div>
)
}

export default Inputting