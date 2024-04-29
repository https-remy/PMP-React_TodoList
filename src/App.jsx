import CardToDo from "./CardToDo";
import { useState } from "react";

const DEFAULT_TODO = [];

function App() {
	const [todos, setTodos] = useState(DEFAULT_TODO);
	let content;

	function handleSubmit(e) {
		e.preventDefault();
		if (!e.target[0].value) {
			return;
		}
		const txtTodo = e.target[0].value;
		e.target[0].value = "";
		const newTodo = {id: todos.length + 1, txt: txtTodo};
		setTodos([...todos, newTodo]);
	}

	if (todos.length === 0) {
		content = <p className="text-slate-100">You didnt have things to do, had some !</p>;
	} else {
		content = todos.map((todo) => <CardToDo key={todo.id}
												id={todo.id}
												txt={todo.txt} 
												deleteTodo={setTodos}
												todos={todos}/>);
	}

	return (
		<div className='h-screen bg-slate-900'>
			<div className='max-w-4xl mx-auto pt-20 px-6'>
				<h1 className='text-3xl text-slate-100 mb-4'>Todo List :</h1>
				<form onSubmit={handleSubmit} className='mb-10'>
					<label htmlFor='todo-item' className='text-slate-50'>
						Add Something to do
					</label>
					<input type='text' className='mt-1 block w-full rounded' name="todo"/>
					<button className='mt-4 rounded p-2 bg-slate-50 min-w-[115px]'>
						Add
					</button>
				</form>
				<div className='todoContainer'>
					{content}
				</div>
			</div>
		</div>
	);
}

export default App;
