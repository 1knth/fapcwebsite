import storeimg from '../assets/building.webp'

function About() {
	return (
		<main className='min-h-screen px-4 py-20 md:px-8 lg:px-12'>
			<section className='mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16'>
				<header className='flex flex-col items-start gap-6'>
					<p className='text-sm font-semibold uppercase tracking-[0.25em] text-slate-500'>About the firm</p>
					<h1 className='heading-1 text-left text-slate-800'>Our Story</h1>
					<article className='flex max-w-3xl flex-col gap-5 text-left text-lg leading-relaxed text-slate-700 md:text-xl'>
						<p>Founded in 1996 by Roberto Settembrini, our agency was built to support business owners who need more than basic tax filing — they need confidence that their corporate obligations are handled carefully, accurately, and on time.</p>
						<p>Over the years, we have worked with small businesses, incorporated professionals, and growing companies to simplify year-end reporting, T2 corporate tax preparation, and ongoing accounting needs.</p>

						<div className='my-4 border-l-2 border-slate-400 pl-6'>
							<h2 className='mb-4 text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl'>The Name That Stayed</h2>
							<div className='flex flex-col gap-5'>
								<p>Not every company name carries a story, but ours does. Financial Agency Professional Corporation was created before Ontario introduced rules requiring accounting corporations to include a founder or accountant’s name in the company name. When those rules arrived, the name we had built our work around was suddenly at risk.</p>
								<p>For a firm that had already spent years earning trust under that name, changing it was not a small thing. It meant leaving behind part of the identity our clients had come to know. So the name was defended, the case was fought, and in the end, Financial Agency Professional Corporation remained.</p>
								<p>That chapter became part of who we are: a small firm with a long memory, a steady reputation, and a name that has been carried forward through decades of work, change, and client relationships.</p>
							</div>
						</div>

						<p>As a small-sized firm ourselves, we understand the value of personal service, clear communication, and long-term trust. Today, our focus is on helping new clients feel organized, compliant, and supported while continuing to build a reputation for reliable work, responsive service, and professional guidance that businesses can depend on year after year.</p>
					</article>
				</header>

				<figure className='about-film-image'>
					<img src={storeimg} alt='Financial Agency storefront' />
				</figure>
			</section>

			<section className='mx-auto mt-24 w-full max-w-7xl'>
				<h1 className='heading-1 text-left text-slate-800'>Our Team</h1>
			</section>
		</main>
	)
}

export default About
