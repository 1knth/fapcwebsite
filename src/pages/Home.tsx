import utlogo from '../assets/utlogo.png';
import { RiArrowRightLongFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Services from '../components/Services/Services.tsx'

function Home() {
	return (
		<main className='main'>
			<section className='landing'> 
					<header> 
						<h1 className='heading-1'> Clarity for young <br/>professionals building <br/> their future.</h1>
						<Link to='/book' className='cta-1'>Book a <span>FREE</span> consultation <RiArrowRightLongFill /></Link>
					</header>
			</section>
			<section className='min-w-screen py-5 bg-gray-500/30 flex flex-col justify-center items-center gap-5'>
				<h3 className='text-3xl text-gray-800'>We've been working with businesses for 30+ years</h3>
				<div className='w-40 h-40 flex justify-center gap-30 grayscale'>
					<img src={utlogo} alt="uncle tetsu img" ></img>
					<img src={utlogo} alt="uncle tetsu img" ></img>
					<img src={utlogo} alt="uncle tetsu img" ></img>
				</div>
			</section>

			<Services/>
		</main>

	)
}

export default Home;
