import { Link } from 'react-router-dom'

type PricingCardProps = {

	title: string
	price: string
	description: string
	features: string[]
	highlighted?: boolean
}

function PricingCard(props: PricingCardProps) {
	return (
		<article
			className={`flex h-full flex-col rounded-3xl p-8 shadow-sm transition ${
				props.highlighted ? 'bg-slate-700 text-white' : 'bg-white text-slate-900'
			}`}
		>
			<div className='mb-8 flex flex-col gap-3'>
				<p className='text-sm font-semibold uppercase tracking-[0.2em] opacity-70'>{props.title}</p>
				<h2 className='text-4xl font-semibold tracking-tight md:text-5xl'>{props.price}</h2>
				<p className={`text-base leading-relaxed ${props.highlighted ? 'text-slate-200' : 'text-slate-600'}`}>
					{props.description}
				</p>
			</div>

			<ul className='mb-8 flex flex-1 flex-col gap-3'>
				{props.features.map((feature) => (
					<li key={feature} className='flex items-start gap-3 text-base md:text-lg'>
						<span className={`mt-2 h-2 w-2 rounded-full ${props.highlighted ? 'bg-white' : 'bg-slate-500'}`}></span>
						<span>{feature}</span>
					</li>
				))}
			</ul>

			<Link
				to='/book'
				className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-medium transition ${
					props.highlighted
						? 'bg-white text-slate-800 hover:bg-slate-200'
						: 'bg-slate-700 text-white hover:bg-slate-900'
				}`}
			>
				Book a consultation
			</Link>
		</article>
	)
}

function Pricing() {
	return (
		<main className='min-h-screen px-4 py-20 md:px-8 lg:px-12'>
			<section className='mx-auto flex w-full max-w-6xl flex-col gap-16'>
				<header className='flex flex-col items-center gap-5 text-center'>
					<h1 className='heading-1'>Pricing</h1>
					<p className='max-w-3xl text-md leading-relaxed text-slate-700 md:text-xl'>
						Transparent pricing for individuals, entrepreneurs, and growing businesses who want reliable financial support.
					</p>
				</header>

				<section className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
					<PricingCard
						title='Personal Tax'
						price='Starting at $150'
						description='Straightforward personal tax support for individuals and families who want clarity and confidence at filing time.'
						features={[
							'T1 filing and review',
							'Deductions and credits check',
							'Email support for follow-up questions',
						]}
					/>
					<PricingCard
						title='Small Business'
						price='Starting at $450/mo'
						description='Ongoing bookkeeping and tax support for owner-operators and growing teams that need consistent financial visibility.'
						features={[
							'Monthly bookkeeping and reconciliations',
							'Year-round tax planning guidance',
							'Clear monthly reporting',
						]}
						highlighted
					/>
					<PricingCard
						title='Enterprise / Custom'
						price='Custom quote'
						description='Tailored support for more complex organizations that need a custom mix of advisory, payroll, and compliance services.'
						features={[
							'Custom engagement scope',
							'Payroll and sales tax support',
							'Advisory and process guidance',
						]}
					/>
				</section>

				<section className='rounded-3xl bg-white p-8 shadow-sm md:p-10'>
					<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
						<div className='flex flex-col gap-3'>
							<h2 className='text-3xl font-semibold tracking-tight text-slate-900'>What affects pricing?</h2>
							<p className='text-base leading-relaxed text-slate-700 md:text-lg'>
								Final pricing depends on filing complexity, business size, transaction volume, payroll needs, and the level of ongoing support required.
							</p>
						</div>
						<div className='flex flex-col gap-3'>
							<h2 className='text-3xl font-semibold tracking-tight text-slate-900'>Need a tailored quote?</h2>
							<p className='text-base leading-relaxed text-slate-700 md:text-lg'>
								If your needs are more specialized, book a consultation and we can recommend the right scope of work for your business.
							</p>
						</div>
					</div>
				</section>
			</section>
		</main>
	)
}

export default Pricing
