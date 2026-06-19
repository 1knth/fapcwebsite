import ContactForm from "../components/Formspree"

function Book() {
	return (
		<main className='min-h-screen px-4 py-20 md:px-8 lg:px-12'>
			<section className='mx-auto flex w-full max-w-6xl flex-col gap-16'>
				<header className='flex flex-col items-center gap-5 text-center'>
					<h1 className='heading-1'>Speak with us.</h1>
					<p className='max-w-3xl text-md leading-relaxed text-slate-700 md:text-xl'>
						Let’s talk through where you are, what you need, and how we can help you.
					</p>
				</header>
				<section>
					<ContactForm />
				</section>
			</section>
		</main>
	)
}
export default Book
