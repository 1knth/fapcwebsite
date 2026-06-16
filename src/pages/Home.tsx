import utlogo from '../assets/utlogo.png';
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
						<Link to='/book' className='flex items-center gap-1 bg-slate-500 px-5 py-3 rounded-4xl text-xl text-white hover:bg-slate-700 transition duration-200 ease-in-out'> Contact us <RiArrowRightLongFill /></Link>
					</header>
			</section>
			<section className='min-w-screen py-5 bg-gray-500/30 flex flex-col justify-center items-center gap-5'>
				<h3 className='text-2xl text-gray-800 tracking-tighter'>We've been working with businesses for 30+ years</h3>
				<div className=' flex items-center justify-center text-center gap-30 grayscale'>
					<div className='min-w-50 text-3xl w-40 h-40'>
						<p>Corporate Tax</p>
						<Counter type='t2'/>
					</div>
					<div className='min-w-50 text-3xl w-40 h-40'>
						<p>Personal Tax</p>
						<Counter type='t1'/>
					</div>
					<div className='min-w-50 text-3xl w-40 h-40'>
						<p>Other Accounting Services</p>
						<Counter type='other'/>
					</div>
				</div>
			</section>
			<Services/>
		</main>

	)
}

export default Home;
