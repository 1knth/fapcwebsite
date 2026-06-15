import ServicesText from './ServicesText'
import utlogo from '../../assets/utlogo.png'
function Services() {
	return (
		<section id='services-container'>
			<header className='flex flex-col justify-center items-center gap-20 py-20' >
				<h1 className='heading-1 '>What we do best</h1>					
				<div className='services' >
					<div className='services-images'>
						<img src={utlogo} alt='card'></img>
					</div>
					<div className='flex flex-col gap-4 items-start text-start'>
						<ServicesText title="1. Accounting & Bookkeeping" desc="Keep your finances organized with accurate recordkeeping, monthly reconciliations, and clear financial reporting so you always know where your business stands." />
						<ServicesText title="2. Tax & Planning" desc="Plan ahead with strategic tax guidance, accurate filings, and year-round support designed to help you minimize surprises and stay compliant." />				
						<ServicesText title="3. Business Advisory" desc="Make smarter business decisions with practical financial insights, cash flow guidance, and growth-focused advice tailored to your goals." />
						<ServicesText title="4. Payroll & Sales Tax Services" desc="Simplify payroll, remittances, and sales tax filings with reliable support that keeps your business running smoothly and on schedule." />
					</div>
				</div>
			</header>
		</section>
	)
}

export default Services
