import CardToDo from "./CardToDo";
import { useState } from "react";
import { nanoid } from "nanoid";

const DEFAULT_TODO = [];

function App() {
	const [todos, setTodos] = useState(DEFAULT_TODO);
	const [showValidation, setShowValidation] = useState(false);
	let content;

	if (todos.length > 0) {
		content = todos.map((todo) => (
			<CardToDo
				key={nanoid()}
				id={todo.id}
				txt={todo.txt}
				setTodos={setTodos}
				todos={todos}
			/>
		));
	} else {
		content = <p className='text-white'>Nothing to do, add some !</p>;
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (e.target[0].value === "") {
			setShowValidation(true);
			return;
		}
		const newTodo = {
			key: nanoid(),
			id: todos.length,
			txt: e.target[0].value,
			setTodos: setTodos,
		};
		setTodos([...todos, newTodo]);
		e.target[0].value = "";
		setShowValidation(false);
	}

	return (
		<div className='h-screen bg-slate-900'>
			<div className='max-w-4xl mx-auto pt-20 px-6'>
				<h1 className='text-3xl text-slate-100 mb-4'>Todo List :</h1>
				<form onSubmit={handleSubmit} className='mb-10'>
					<label htmlFor='todo-item' className='text-slate-50'>
						Add Something to do
					</label>
					<input
						type='text'
						className='mt-1 block w-full rounded'
						name='todo'
					/>
					{showValidation && (
						<p className='text-red-400 text-sm'>
							Please enter something to do!
						</p>
					)}
					<button className='mt-4 rounded p-2 bg-slate-50 min-w-[115px]'>
						Add
					</button>
				</form>
				<ul>{content}</ul>
			</div>
		</div>
	);
}

export default App;
