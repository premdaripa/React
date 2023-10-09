import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className='h-screen w-screen flex flex-col items-center bg-slate-700 pt-14'>
      <h1>Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
