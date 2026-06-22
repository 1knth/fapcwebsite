import { Link, useParams } from 'react-router-dom'
import { getServiceBySlug, services } from '../data/services'
import { RiArrowRightLongFill } from 'react-icons/ri'

function ServiceDetail() {
	const { slug } = useParams()
	const service = getServiceBySlug(slug)

	if (!service) {
		return (
			<main className='min-h-screen bg-[#eae7e3] px-4 py-20 md:px-8 lg:px-12'>
				<section className='mx-auto flex max-w-4xl flex-col items-center gap-6 text-center'>
					<h1 className='heading-1 text-[#55657a]'>Service not found</h1>
					<p className='text-xl leading-relaxed text-[#4f5968]'>The service you’re looking for does not exist.</p>
					<Link to='/#services' className='rounded-full bg-[#6683a8] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#203f68]'>View services</Link>
				</section>
			</main>
		)
	}

	return (
		<main className='min-h-screen bg-[#eae7e3] px-4 py-20 text-[#4f5968] md:px-8 lg:px-12'>
			<section className='mx-auto flex w-full max-w-7xl flex-col gap-14'>
				<header className='border-b border-[#d7d1ca] pb-12'>
					<Link to='/#services' className='text-sm font-semibold uppercase tracking-[0.25em] text-[#738296] transition hover:text-[#203f68]'>Services</Link>
					<div className='mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.45fr)] lg:items-end'>
						<div className='flex flex-col gap-6'>
							<h1 className='heading-1 max-w-5xl text-left text-[#55657a]'>{service.title}</h1>
							<p className='max-w-3xl text-2xl leading-relaxed text-[#4f5968] md:text-3xl'>{service.heroDesc}</p>
						</div>

						<aside className='rounded-3xl border border-[#d7d1ca] bg-[#f5f2ee] p-7 shadow-sm'>
							<p className='mt-4 text-xl leading-relaxed text-[#55657a]'>{service.shortDesc}</p>
							<Link to='/book' className='mt-6 inline-flex items-center gap-2 rounded-full bg-[#6683a8] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#203f68]'>
								Book a consultation
								<RiArrowRightLongFill />
							</Link>
						</aside>
					</div>
				</header>

				<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start'>
					<article className='max-w-3xl text-left'>
						<section className='flex flex-col gap-6 text-xl leading-relaxed text-[#4f5968]'>
							{service.overview.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</section>

						{service.articleSections.map((section) => (
							<section key={section.heading} className='mt-14 border-t border-[#d7d1ca] pt-10'>
								<h2 className='text-4xl font-semibold tracking-tight text-[#55657a]'>{section.heading}</h2>
								<div className='mt-6 flex flex-col gap-5 text-xl leading-relaxed text-[#4f5968]'>
									{section.body.map((paragraph) => (
										<p key={paragraph}>{paragraph}</p>
									))}
								</div>
							</section>
						))}

						<section className='mt-14 grid grid-cols-1 gap-8 border-t border-[#d7d1ca] pt-10 md:grid-cols-2'>
							<div>
								<h2 className='text-3xl font-semibold tracking-tight text-[#55657a]'>What’s included</h2>
								<ul className='mt-5 flex flex-col gap-3'>
									{service.includes.map((item) => (
										<li key={item} className='flex gap-3 text-lg leading-relaxed text-[#4f5968]'>
											<span className='mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[#6683a8]'></span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h2 className='text-3xl font-semibold tracking-tight text-[#55657a]'>Who it’s for</h2>
								<ul className='mt-5 flex flex-col gap-3'>
									{service.whoItsFor.map((item) => (
										<li key={item} className='flex gap-3 text-lg leading-relaxed text-[#4f5968]'>
											<span className='mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[#6683a8]'></span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</section>
					</article>

					<aside className='lg:sticky lg:top-24'>
						<section className='rounded-3xl bg-[#55657a] p-7 text-white shadow-sm'>
							<p className='text-sm font-semibold uppercase tracking-[0.25em] text-[#eae7e3]/75'>Process timeline</p>
							<ol className='mt-8 flex flex-col gap-0'>
								{service.process.map((step, index) => (
									<li key={step.title} className='relative grid grid-cols-[2.75rem_1fr] gap-4 pb-8 last:pb-0'>
										<div className='flex flex-col items-center'>
											<span className='flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white'>0{index + 1}</span>
											{index < service.process.length - 1 && <span className='mt-3 h-full w-px bg-white/20'></span>}
										</div>
										<div>
											<h3 className='text-xl font-semibold leading-tight'>{step.title}</h3>
											<p className='mt-3 text-base leading-relaxed text-[#eae7e3]/80'>{step.description}</p>
										</div>
									</li>
								))}
							</ol>
						</section>
					</aside>
				</div>

				<section className='grid grid-cols-1 gap-6 border-t border-[#d7d1ca] pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start'>
					<div>
						<h2 className='text-4xl font-semibold tracking-tight text-[#55657a]'>Explore other services</h2>
						<p className='mt-3 text-lg leading-relaxed text-[#4f5968]'>Each service connects back to the same goal: clear records, practical advice, and fewer surprises.</p>
					</div>
					<div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
						{services
							.filter((item) => item.slug !== service.slug)
							.map((item) => (
								<Link key={item.slug} to={`/services/${item.slug}`} className='rounded-2xl border border-[#d7d1ca] bg-[#f5f2ee] p-5 text-lg font-semibold text-[#55657a] shadow-sm transition hover:-translate-y-1 hover:border-[#6683a8] hover:shadow-md'>
									{item.title}
								</Link>
							))}
					</div>
				</section>
			</section>
		</main>
	)
}

export default ServiceDetail
