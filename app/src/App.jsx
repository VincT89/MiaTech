import './index.css';
import { HelloWorld } from './components/HelloWorld';
import { Counter } from './components/Counter';
import { TextInput } from './components/TextInput';
import { LoginForm } from './components/LoginForm';
import { UncontrolledInput } from './components/UncontrolledInput';
import { List } from './components/List';
import { ContainerCard } from './components/ContainerCard';
import TodoList from './components/TodoList';
import { TodosProvider } from './context/TodosProvider';

function App() {
  return (
    <TodosProvider>
      <HelloWorld />
      <Counter />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />
      <List />
      <ContainerCard />
      <TodoList />
    </TodosProvider>
  )
}

export default App;
