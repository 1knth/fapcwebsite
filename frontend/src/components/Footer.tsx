import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className='w-full bg-slate-600 px-4 py-10 text-white md:px-8 lg:px-20'>
			<div className='mx-auto flex w-full max-w-7xl flex-col gap-10'>
				<div className='w-fit'>
					<Link to='/' className='inline-block w-fit'>
						<h1 className='text-2xl font-semibold leading-none tracking-tight md:text-3xl'>
							FINANCIAL AGENCY<br />
							<span className='font-light opacity-50'>Professional Corporation</span>
						</h1>
					</Link>
				</div>

				<div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20'>
					<div className='flex flex-col gap-3 tracking-tighter'>
						<h2 className='text-2xl font-semibold md:text-3xl'>Services</h2>
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/#services'>Accounting & Bookkeeping</Link>
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/#services'>Tax & Planning</Link>
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/#services'>Business Advisory</Link>
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/#services'>Payroll & Sales Tax Services</Link>
					</div>

					<div className='flex flex-col gap-3 tracking-tighter'>
						<h2 className='text-2xl font-semibold md:text-3xl'>Company</h2>
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/us'>About Us</Link>
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/pricing'>Pricing</Link>
					</div>

					<div className='flex flex-col gap-3 tracking-tighter sm:col-span-2 lg:col-span-1'>
						<h2 className='text-2xl font-semibold md:text-3xl'>Connect</h2>
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/book'>Contact Us</Link>
						<a className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' href='tel:4166148046'>Tel: (416) 614-8046</a>
					</div>
				</div>

				<p className='border-t border-white/20 pt-6 text-sm opacity-50 md:text-base'>Designed by<a href='https://knthyang.xyz' target='_blank' className='text-blue-400'> knthyang.xyz </a></p>
			</div>
		</footer>
	)
}

export default Footer
