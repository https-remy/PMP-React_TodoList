export default function CardToDo({id, txt, setTodos, todos}) {

	function handleDelete() {
        setTodos(todos.filter((todo) => todo.id!== id));
    }

	return (
		<li className="w-full bg-white h-8 rounded flex items-center mb-4">
			<span className="ml-2">{txt}</span>
			<button onClick={handleDelete} className="ml-auto mr-2 cursor-pointer bg-none">❌</button>
		</li>
	);
}
