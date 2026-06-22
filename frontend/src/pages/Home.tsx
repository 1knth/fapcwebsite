import { RiArrowRightLongFill } from "react-icons/ri"
import { Link } from 'react-router-dom'
import Services from '../components/Services/Services.tsx'
import Counter from '../components/Counter.tsx'
import GoogleMaps from '../components/Maps/Maps.tsx'

function Home() {
	return (
		<main className='main'>
			<section className='landing'> 
				<header className='landing-copy'> 
					<h1 className='landing-heading'>Where accuracy builds confidence and confidence builds trust.</h1>
					<p className='landing-desc'>Accounting, tax, and business support for owners who want cleaner records, clearer reporting, and practical guidance throughout the year.</p>
					<Link to='/book' className='landing-cta'> Book a FREE Consultation <RiArrowRightLongFill /></Link>
				</header>

				{/* <div className='landing-visual'> */}
				{/* 	<FinancialDashboard /> */}
				{/* </div> */}
			</section>
			<section className='relative overflow-hidden bg-[#55657a] px-4 py-16 text-[#f5f2ee] md:px-8 lg:px-12'>
				<div className='absolute inset-0 opacity-25 [background:radial-gradient(circle_at_20%_20%,#eae7e3,transparent_28%),radial-gradient(circle_at_80%_70%,#d7d1ca,transparent_24%)]'></div>
				<div className='absolute inset-x-0 top-0 h-px bg-[#d7d1ca]/60'></div>
				<div className='absolute inset-x-0 bottom-0 h-px bg-[#d7d1ca]/40'></div>
				<div className='relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center'>
					<div className='flex max-w-3xl flex-col gap-3'>
						<h3 className='text-3xl font-semibold tracking-tight text-[#f5f2ee] md:text-5xl'>We've been working with businesses for 30+ years</h3>
					</div>

					<div className='grid w-full grid-cols-1 gap-4 md:grid-cols-3'>
						<div className='rounded-3xl border border-[#d7d1ca]/25 bg-[#f5f2ee]/10 p-8 shadow-sm backdrop-blur-sm'>
							<p className='text-base font-medium text-[#eae7e3]/75'>Corporate Tax</p>
							<div className='mt-3 text-5xl font-semibold tracking-tight text-white md:text-6xl'><Counter type='t2'/></div>
						</div>
						<div className='rounded-3xl border border-[#d7d1ca]/25 bg-[#f5f2ee]/10 p-8 shadow-sm backdrop-blur-sm'>
							<p className='text-base font-medium text-[#eae7e3]/75'>Personal Tax</p>
							<div className='mt-3 text-5xl font-semibold tracking-tight text-white md:text-6xl'><Counter type='t1'/></div>
						</div>
						<div className='rounded-3xl border border-[#d7d1ca]/25 bg-[#f5f2ee]/10 p-8 shadow-sm backdrop-blur-sm'>
							<p className='text-base font-medium text-[#eae7e3]/75'>Other Accounting Services</p>
							<div className='mt-3 text-5xl font-semibold tracking-tight text-white md:text-6xl'><Counter type='other'/></div>
						</div>
					</div>
				</div>
			</section>
			<Services/>
			<GoogleMaps/>
		</main>
	)
}

export default Home;
