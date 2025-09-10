import './index.css'
import { HelloWorld } from './component/HelloWorld';
import { Counter } from './component/Counter';
import { TextInput } from './component/TextInput';
import { LoginForm } from './component/LoginForm';
import { UncontrolledInput } from './component/UncontrolledInput';
import { List } from './component/List';


function App() {
 
  return (
    < >
      <HelloWorld />
      <Counter />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />
      <List />
    </>
  )
}

export default App
