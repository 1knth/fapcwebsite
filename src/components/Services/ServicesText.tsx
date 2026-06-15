type ServicesTextProp = {
	title: String,
	desc: String
}

function ServicesText(props: ServicesTextProp) {
	return (
		<section className='flex flex-col items-start justify-center min-w-xl min-h-50 p-10 bg-white rounded-lg bg-red'>
			<p className='heading-3 text-4xl font-bold font-(family-name:Metrik)'>{props.title}</p>
			<p className='text-2xl tracking-tight'>{props.desc}</p>
		</section>
	)	
}


export default ServicesText
