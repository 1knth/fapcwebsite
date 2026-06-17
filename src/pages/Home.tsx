import { RiArrowRightLongFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Services from '../components/Services/Services.tsx'
import Counter from '../components/Counter.tsx';
function Home() {
	return (
		<main className='main'>
			<section className='landing'> 
					<header> 
						<h1 className='heading-1'> Where accuracy builds <br/>confidence and confidence<br/>  builds trust.</h1>
						<Link to='/book' className='flex items-center gap-1 bg-slate-500 px-5 py-3 rounded-4xl text-xl text-white hover:bg-slate-700 transition duration-200 ease-in-out'> Book a FREE Consultation <RiArrowRightLongFill /></Link>
					</header>
			</section>
			<section className='relative overflow-hidden bg-slate-800 px-4 py-16 text-white md:px-8 lg:px-12'>
				<div className='absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,white,transparent_28%),radial-gradient(circle_at_80%_70%,white,transparent_24%)]'></div>
				<div className='relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center'>
					<div className='flex max-w-3xl flex-col gap-3'>
						{/* <p className='text-sm font-semibold uppercase tracking-[0.25em] text-slate-300'>Proven experience</p> */}
						<h3 className='text-3xl font-semibold tracking-tight md:text-5xl'>We've been working with businesses for 30+ years</h3>
					</div>

					<div className='grid w-full grid-cols-1 gap-4 md:grid-cols-3'>
						<div className='rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm'>
							<p className='text-base font-medium text-slate-300'>Corporate Tax</p>
							<div className='mt-3 text-5xl font-semibold tracking-tight md:text-6xl'><Counter type='t2'/></div>
						</div>
						<div className='rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm'>
							<p className='text-base font-medium text-slate-300'>Personal Tax</p>
							<div className='mt-3 text-5xl font-semibold tracking-tight md:text-6xl'><Counter type='t1'/></div>
						</div>
						<div className='rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm'>
							<p className='text-base font-medium text-slate-300'>Other Accounting Services</p>
							<div className='mt-3 text-5xl font-semibold tracking-tight md:text-6xl'><Counter type='other'/></div>
						</div>
					</div>
				</div>
			</section>
			<Services/>
		</main>

	)
}

export default Home;
