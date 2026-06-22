import tax from '../../assets/insights_tax_colleagues.jpg'
import { CgNotes } from "react-icons/cg"
import { TbReceiptTax } from "react-icons/tb"
import { PiLightbulbFilamentFill } from "react-icons/pi"
import { MdOutlineInsights } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom'

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
		<section id='services-container' className='min-h-screen px-4 py-24 md:px-8 md:py-32 lg:px-12'>
			<header id='services' className='mx-auto flex w-full max-w-7xl flex-col items-center gap-10 md:gap-16'>
				<h1 className='heading-1 max-w-4xl text-center text-[#55657a]'>What We Offer</h1>
				<div  className='flex w-full flex-col items-center gap-8 lg:flex-row lg:items-stretch'>
					<div className='aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-[#9aa9bb] lg:w-[28rem] lg:max-w-none lg:flex-none'>
						<img src={tax} alt='Financial services logo' loading='lazy' className='h-full w-full object-cover' />
					</div>
					<div className='flex w-full flex-1 flex-col gap-4 text-start'>
						<ServicesCard link='/services/accounting-bookkeeping' imgSrc={noteIcon} title="Accounting & Bookkeeping" desc="Keep your finances organized with accurate recordkeeping, monthly reconciliations, and clear financial reporting so you always know where your business stands." />
						<ServicesCard link='/services/tax-planning' imgSrc={planningIcon} title="Tax & Planning" desc="Plan ahead with strategic tax guidance, accurate filings, and year-round support designed to help you minimize surprises and stay compliant." />
						<ServicesCard link='/services/business-advisory' imgSrc={advisoryIcon} title="Business Advisory" desc="Make smarter business decisions with practical financial insights, cash flow guidance, and growth-focused advice tailored to your goals." />
						<ServicesCard link='/services/payroll-source-deductions' imgSrc={taxIcon} title="Payroll & Source Deductions" desc="Practical support for employee payroll records, source deduction remittances, and year-end payroll reporting." />
						<ServicesCard link='/services/sales-tax-filing' imgSrc={taxIcon} title="Sales Tax Filing" desc="HST/GST filing support for sole proprietors and corporations that need clear sales tax records, input tax credit review, and deadline tracking." />
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
					<Link to={props.link} className='inline-flex w-fit items-center gap-1 text-base font-semibold leading-relaxed text-[#6683a8] underline underline-offset-4 transition hover:text-[#203f68] md:text-lg'>
						Learn More
						<IoIosArrowForward className='translate-y-[1px]' />
					</Link>
				</div>

			</div>
		</section>
	)
}

export default Services
