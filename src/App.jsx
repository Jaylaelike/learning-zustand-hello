
import './App.css'
import logo from './assets/react.svg'
import { useCounterStore, useThemeStore } from "./store"
import  Counter  from "./components/Counter"
import ThemeControl from './components/ThemeControl'

function App() {

//const { increment , decrement } = useCounterStore()

const increment = useCounterStore((state) => state.increment)
const decrement = useCounterStore((state) => state.decrement)

const color = useThemeStore((state) => state.color)
const bgColor = useThemeStore((state) => state.backgroundColor)

  return (
    <div 
    className="App-header"
      style={{
        backgroundColor: bgColor,
        color
      }}>
  
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>

      <Counter />

      <ThemeControl />
    
  </div>
  )

}

export default App
