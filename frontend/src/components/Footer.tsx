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
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/services/accounting-bookkeeping'>Accounting & Bookkeeping</Link>
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/services/tax-planning'>Tax & Planning</Link>
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/services/business-advisory'>Business Advisory</Link>
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/services/payroll-source-deductions'>Payroll & Source Deductions</Link>
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' to='/services/sales-tax-filing'>Sales Tax Filing</Link>
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
						<Link className='text-lg opacity-70 transition hover:opacity-100 md:text-2xl' target='_blank' to='https://www.google.com/maps/dir//Financial+Agency,+3220+Dufferin+St+%233,+North+York,+ON+M6A+2T3/@43.892736,-79.2690688,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b310bc3de0c69:0x16e2ca27a6770ffd!2m2!1d-79.4579049!2d43.7195018?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D'>3220 Dufferin St #3, North York, ON M6A 2T3</Link>
					</div>
				</div>

				<p className='border-t border-white/20 pt-6 text-sm opacity-50 md:text-base'>Developed by<a href='https://knthyang.xyz' target='_blank' className='text-blue-400'> knthyang.xyz </a></p>
			</div>
		</footer>
	)
}

export default Footer
