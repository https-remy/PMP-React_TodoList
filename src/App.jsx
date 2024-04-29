function App() {
	return (
		<div className='h-screen bg-slate-900'>
			<div className='max-w-4xl mx-auto pt-20 px-6'>
				<h1 className='text-3xl text-slate-100 mb-4'>Todo List :</h1>

				<form className='mb-10'>
					<label htmlFor='todo-item' className='text-slate-50'>
						Add Something to do
					</label>
					<input type='text' className='mt-1 block w-full rounded' />
					<button className='mt-4 rounded p-2 bg-slate-50 min-w-[115px]'>
						Add
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;
