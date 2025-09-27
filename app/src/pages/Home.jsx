import { HelloWorld } from "../components/HelloWorld";
import { Counter } from "../components/Counter";
import { TextInput } from "../components/TextInput";
import { LoginForm } from "../components/LoginForm";
import { UncontrolledInput } from "../components/UncontrolledInput";
import { List } from "../components/List";
import { ContainerCard } from "../components/ContainerCard";
import TodoList from "../components/TodoList";

export default function Home() {
	return (
		<>
			<div className="p-6 space-y-6 text-center m-6">
				<HelloWorld />
				<Counter />
				<TextInput />
				<LoginForm />
				<UncontrolledInput />
				<List />
				<ContainerCard />
				<TodoList />
			</div>
		</>
	);
}
