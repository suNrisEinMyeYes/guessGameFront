import { useState } from 'react'
import { create } from './interact'


function ToDoForm({ addTask }) {
    const [bid, setBid] = useState('')
    const [maxPlayers, setMaxPlayers] = useState('')
    const [guessed, setNumber] = useState('')



    const handleChange = (e) => {
        setBid(e.currentTarget.value)
    }

    const handleChange2 = (e) => {
        setMaxPlayers(e.currentTarget.value)
    }

    const handleChange3 = (e) => {
        setNumber(e.currentTarget.value)
    }

    const handleSubmit1 = (e) => {
        e.preventDefault()
        addTask(guessed, maxPlayers, bid)
        setBid("")
        setMaxPlayers("")
        setNumber("")

    }



    return (

        <form onSubmit={handleSubmit1}>
            <input
                value={bid}
                type="text"
                onChange={handleChange}
                placeholder="Your bid"
            />
            <input
                value={maxPlayers}
                type="text"
                onChange={handleChange2}
                placeholder="Max players"
            />
            <input
                value={guessed}
                type="text"
                onChange={handleChange3}
                placeholder="guesse number"
            />
            <button >Create game</button>
        </form>
    )
}

export default ToDoForm