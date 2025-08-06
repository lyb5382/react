import './App.css'
import Button from './componentes/Button'
import Input from './componentes/Input'

function App() {

  return (
    <div>
      <Input inputValue={'hello React'} title={'title'} placeholder={'input'}/>
      <h1>hello React!</h1>
      <Button text={'mail'} color={'skyblue'} />
      <Button text={'cafe'} color={'blue'} />
      <Button text={'blog'} color={'purple'} />
      <Button text={'normal'} />
      <Button text={'child'} color={'darkcyan'} >
        <strong>importance</strong>
      </Button>
    </div>
  )
}

export default App
