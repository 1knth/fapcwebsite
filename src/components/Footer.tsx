import fapc from '../assets/vite.svg'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className='min-w-full, min-h-150 bg-slate-500 flex flex-col px-20'> 
			<img className='w-50 h-50' src={fapc} alt='logo'/>
			
			<div className='gap-20 flex flex-row items-center'>
				<div className='flex flex-col gap-3 text-white tracking-tighter'>
					<h1 className='text-3xl '> Services </h1>
					<Link to='#services'> <h1 className='text-2xl opacity-70'> Accounting & Bookkeeping </h1> </Link>
				</div>
				<div className='flex flex-col gap-3 text-white tracking-tighter'>
					<h1 className='text-3xl '> Company </h1>
					<Link to='#services'> <h1 className='text-2xl opacity-70'> Accounting & Bookkeeping </h1> </Link>
				</div>
				<div className='flex flex-col gap-3 text-white tracking-tighter'>
					<h1 className='text-3xl '> Connect </h1>
					<Link to='#services'> <h1 className='text-2xl opacity-70'> Accounting & Bookkeeping </h1> </Link>
				</div>

			</div>
		</footer>
	)
}

export default Footer
