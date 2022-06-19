import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import { connectWallet, create, guess, finish } from "./interact"

function App() {
  const [todos, setTodos] = useState([])
  const [walletAddress, setWallet] = useState("");
  const [gameId, setId] = useState('')
  const [guessingNumber, setNumber] = useState('')
  const [value, setValue] = useState('')
  const [idToFinish, setIdToFinish] = useState('')


  let index = 0;

  const addTask = (number, maxPlayers, bid) => {
    if (bid && number) {
      create(number, maxPlayers, bid)



    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    if (walletResponse === '404') {
      window.open('https://metamask.io/download/', '_blank')
    } else {
      if (walletResponse === "User rejected the request.") {
        window.location.reload()

      } else {
        setWallet(walletResponse);
        while (walletAddress === null) { }
      }
    }
  }



  const handleChange4 = (e) => {
    setNumber(e.currentTarget.value)
  }

  const handleChange5 = (e) => {
    setId(e.currentTarget.value)
  }

  const handleChange6 = (e) => {
    setValue(e.currentTarget.value)
  }

  const handleChange7 = (e) => {
    setIdToFinish(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    guess(gameId, guessingNumber, value)
    setValue("")
    setNumber("")
    setId("")

  }

  const handleFinish = (e) => {
    e.preventDefault()
    finish(idToFinish)
    setIdToFinish("")

  }



  return (
    <div className="App">
      <header>
        <h1>Guess game</h1>
        <h2>{walletAddress}</h2>
      </header>
      <button onClick={connectWalletPressed}>connect metamask</button>
      <h2>Create game form</h2>
      <ToDoForm addTask={addTask} />

      <h2>Participate game form</h2>

      <form>
        <input
          value={guessingNumber}
          type="text"
          onChange={handleChange4}
          placeholder="Number to guess"
        />
        <input
          value={gameId}
          type="text"
          onChange={handleChange5}
          placeholder="Id of game"
        />
        <input
          value={value}
          type="text"
          onChange={handleChange6}
          placeholder="correct value"
        />
        <button onClick={handleSubmit}>Participate</button>
      </form>
      <h2>Finish game by id</h2>

      <form>

        <input
          value={idToFinish}
          type="text"
          onChange={handleChange7}
          placeholder="Id of game"
        />

        <button onClick={handleFinish}>Finish game</button>
      </form>


    </div>
  );
}

export default App;
