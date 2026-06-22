function Maps() {
	const address: string = 'Financial Agency, 3220 Dufferin St #3, North York, ON M6A 2T3'
	const mapSrc: string = `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(address)}&t=k&z=17&output=embed`

	return (
		<section className='px-4 py-16 md:px-8 lg:px-12'>
			<div className='mx-auto w-full max-w-7xl overflow-hidden rounded-3xl border border-[#d7d1ca] bg-[#f5f2ee] shadow-sm'>
				<iframe
					title='Financial Agency location map'
					width='100%'
					height='360'
					loading='lazy'
					referrerPolicy='strict-origin-when-cross-origin'
					src={mapSrc}
					className='block w-full border-0'
					allowFullScreen
				/>
			</div>
		</section>
	)
}

export default Maps
