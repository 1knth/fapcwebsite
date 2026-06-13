import utlogo from '../assets/utlogo.png';

function Home() {
	return (
		<main className='main'>
			<section className='landing'> 
					<header id='landing-text'> 
						<h1 className='heading-1'> Clarity for young <br/>professionals building <br/> their future </h1>
						<div id='links'> 
							<button className='btn-1'>  Book a <span> FREE</span> consultation  </button>
						</div>
					</header>
			</section>
			<section className='banner'>
				<h3 className='heading-2'> We've been working with businesses for over 20 years </h3>
				<ul>
					<li> <img src={utlogo} alt="uncle tetsu img" ></img> </li>
					<li>  <img src={utlogo} alt="uncle tetsu img" ></img></li>
					<li>  <img src={utlogo} alt="uncle tetsu img" ></img></li>
				</ul>
			</section>

			<section>
				<header id='services'>
					<h1 className='heading-1'>What we do best</h1>					
					<div>
						<div>
							<img></img>
							<img></img>
						</div>
						<h2> Hi</h2>				
					</div>
				</header>
			</section>
		</main>
	)
}

export default Home;
