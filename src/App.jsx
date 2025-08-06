import './App.css'
import Ex1 from './componentes/Ex1'
import Ex2 from './componentes/Ex2'
import Ex3 from './componentes/Ex3'

function App() {
  const user = {
    name: 'Ivan',
    age: 38
  }
  return (
    <div>
      <Ex1 {...user} />
      <Ex2 />
      <Ex3 />
    </div>
  )
}

export default App
