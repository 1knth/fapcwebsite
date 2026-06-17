

function Book() {
	return (
		<main className='min-h-screen px-4 py-20 md:px-8 lg:px-12'>
			<section className='mx-auto flex w-full max-w-6xl flex-col gap-16'>
				<header className='flex flex-col items-center gap-5 text-center'>
					<h1 className='heading-1'>Schedule a Meeting</h1>
					<p className='max-w-3xl text-md leading-relaxed text-slate-700 md:text-xl'>
						Let’s talk through where you are, what you need, and how we can help you.
					</p>
				</header>

				<section className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>

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
export default Book
