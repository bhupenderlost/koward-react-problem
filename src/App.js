import { useState } from "react"
export default function App() {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')
  const submit = (e) => {
      e.preventDefault()
      if(input === "" || !input)
          return alert("No Input")
      setList(items => [...items, input])
      setInput('')
  }
    return(
        <div>
            <div>
                <ul>
                    {
                       list.map(item => {
                           return <li>{item}</li>
                       })
                    }
                </ul>
            </div>
            <form onSubmit={submit}>
                <input value={input}  onChange={(e) => setInput(e.target.value)} name="item" type="text" placeholder="Add Item" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

