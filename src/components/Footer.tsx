import fapc from '../assets/vite.svg'

function Footer() {
	return (
		<footer className='min-w-full, min-h-150 bg-slate-500 flex flex-col px-20'> 
			<img className='w-50 h-50' src={fapc} alt='logo'/>

			<div className='flex flex-col'>
				<h1 className='text-3xl'> Services </h1>
				<h1 className='text-3xl'> Services </h1>
			</div>
		</footer>
	)
}

export default Footer
