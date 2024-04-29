export default function CardToDo({txt}) {
	return (
		<div className='px-2 w-full items-center bg-slate-50 min-h-9 rounded flex mb-3'>
			<p className='flex-grow'>{txt}</p>
			<button className='ml-auto cursor-pointer bg-none'>❌</button>
		</div>
	);
}
