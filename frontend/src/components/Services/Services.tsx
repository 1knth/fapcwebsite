import tax from '../../assets/insights_tax_colleagues.jpg'
import { Link } from 'react-router-dom'
import { CgNotes } from "react-icons/cg"
import { TbReceiptTax } from "react-icons/tb"
import { PiLightbulbFilamentFill } from "react-icons/pi"
import { MdOutlineInsights } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io";

type ServicesCardProps = {
	title: string
	desc: string
	imgSrc?: React.ReactNode
	link: string
}

function Services() {
	const noteIcon = <CgNotes className='h-10 w-10 md:h-12 md:w-12' />
	const taxIcon = <TbReceiptTax className='h-10 w-10 md:h-12 md:w-12' />
	const planningIcon = <PiLightbulbFilamentFill className='h-10 w-10 md:h-12 md:w-12' />
	const advisoryIcon = <MdOutlineInsights className='h-10 w-10 md:h-12 md:w-12' />

	return (
		<section id='services-container' className='min-h-screen px-4 py-50 md:px-8 lg:px-12'>
			<header id='services' className='mx-auto flex w-full max-w-7xl flex-col items-center gap-10 md:gap-16'>
				<h1 className='heading-1 text-center'>What we do best</h1>
				<div  className='flex w-full flex-col items-center gap-8 lg:flex-row lg:items-stretch'>
					<div className='aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-[#9aa9bb] lg:w-[28rem] lg:max-w-none lg:flex-none'>
						<img src={tax} alt='Financial services logo' className='h-full w-full object-cover' />
					</div>
					<div className='flex w-full flex-1 flex-col gap-4 text-start'>
						<ServicesCard link='/pricing' imgSrc={noteIcon} title="Accounting & Bookkeeping" desc="Keep your finances organized with accurate recordkeeping, monthly reconciliations, and clear financial reporting so you always know where your business stands." />
						<ServicesCard link='/pricing' imgSrc={planningIcon} title="Tax & Planning" desc="Plan ahead with strategic tax guidance, accurate filings, and year-round support designed to help you minimize surprises and stay compliant." />
						<ServicesCard link='/pricing' imgSrc={advisoryIcon} title="Business Advisory" desc="Make smarter business decisions with practical financial insights, cash flow guidance, and growth-focused advice tailored to your goals." />
						<ServicesCard link='/pricing' imgSrc={taxIcon} title="Payroll & Sales Tax Services" desc="Simplify payroll, remittances, and sales tax filings with reliable support that keeps your business running smoothly and on schedule." />
					</div>
				</div>
			</header>
		</section>
	)
}

function ServicesCard(props: ServicesCardProps) {
	return (
		<section className='w-full'>
			<div className='flex w-full flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm md:flex-row md:items-center md:gap-6 md:p-6'>
				<div className='flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-slate-100 text-slate-700 md:h-14 md:w-14'>
					{props.imgSrc}
				</div>
				<div className='flex min-w-0 flex-col gap-2'>
					<p className='heading-3 text-2xl font-bold md:text-3xl'>{props.title}</p>
					<p className='text-base leading-relaxed text-slate-700 md:text-lg'>{props.desc}</p>
					<Link to={props.link} className='inline-flex w-fit items-center gap-1 text-base leading-relaxed text-blue-500/80 underline md:text-lg'>
						Learn More
						<IoIosArrowForward className='translate-y-[1px]' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Services
