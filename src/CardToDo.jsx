export default function CardToDo({id, txt, deleteTodo, todos}) {

	function handleDelete() {
        deleteTodo(todos.filter((todo) => todo.id!== id));
    }

	return (
		<div className='px-2 w-full items-center bg-slate-50 min-h-9 rounded flex mb-3'>
			<p className='flex-grow'>{txt}</p>
			<button onClick={handleDelete} className='ml-auto cursor-pointer bg-none'>❌</button>
		</div>
	);
}
