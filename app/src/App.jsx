import './index.css'
import { HelloWorld } from './components/HelloWorld';
import { Counter } from './components/Counter';
import { TextInput } from './components/TextInput';
import { LoginForm } from './components/LoginForm';
import { UncontrolledInput } from './components/UncontrolledInput';
import { List } from './components/List';
import { ContainerCard } from './components/ContainerCard';


function App() {
 
  return (
    < >
      <HelloWorld />
      <Counter />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />
      <List />
      <ContainerCard />
    </>
  )
}

export default App
