export type ProcessStep = {
	title: string
	description: string
}

export type ServiceArticleSection = {
	heading: string
	body: string[]
}

export type Service = {
	slug: string
	title: string
	shortDesc: string
	heroDesc: string
	overview: string[]
	articleSections: ServiceArticleSection[]
	includes: string[]
	whoItsFor: string[]
	process: ProcessStep[]
}

export const services: Service[] = [
	{
		slug: 'accounting-bookkeeping',
		title: 'Accounting & Bookkeeping',
		shortDesc: 'Clean records and reporting that helps you understand the business behind the numbers.',
		heroDesc: 'Bookkeeping is the foundation for confident decisions. We organize day-to-day transactions, reconcile accounts, and turn raw records into financial reports you can actually use.',
		overview: [
			'Accounting and bookkeeping should do more than keep a file ready for tax season. When records are maintained properly, you can see how cash is moving, which expenses are changing, and whether the business is operating the way you expect.',
			'We help small businesses and incorporated professionals keep their books current throughout the year. The goal is simple: fewer surprises, cleaner records, and a reliable financial picture when you need to make decisions.',
		],
		articleSections: [
			{
				heading: 'A rhythm that keeps the books useful',
				body: [
					'We categorize transactions, reconcile bank and credit card accounts, and review the records for gaps or unusual items. This creates a steady cadence instead of a rushed cleanup at year-end.',
					'Once the records are organized, we prepare reporting that helps explain what happened during the month and what may need attention next.',
				],
			},
			{
				heading: 'Ready for year-end, financing, and planning conversations',
				body: [
					'Clean bookkeeping supports corporate tax preparation, lender requests, management reviews, and planning discussions. It also helps reduce the time spent searching for missing records when deadlines are close.',
				],
			},
		],
		includes: [
			'Bank and credit card reconciliations',
			'Financial statements and management reports',
			'Year-end preparation and accountant-ready records',
		],
		whoItsFor: [
			'Small businesses that need consistent records',
			'Incorporated professionals managing business finances',
			'Owners who want cleaner reports and fewer surprises',
		],
		process: [
			{
				title: 'Review the current books',
				description: 'We look at your existing records, accounts, software, and deadlines so we understand what is working and where cleanup is needed.',
			},
			{
				title: 'Organize and reconcile',
				description: 'Transactions are categorized, supporting details are requested where needed, and accounts are reconciled so the numbers can be trusted.',
			},
			{
				title: 'Report and maintain',
				description: 'You receive clear reporting and ongoing support, with records kept current for tax, planning, and management needs.',
			},
		],
	},
	{
		slug: 'tax-planning',
		title: 'Tax & Planning',
		shortDesc: 'Accurate filings supported by practical year-round planning, compliance review, and clear next steps.',
		heroDesc: 'Tax planning is about understanding obligations before they become urgent. We help individuals and corporations file accurately, plan ahead, and reduce avoidable surprises.',
		overview: [
			'Tax work is most valuable when it is connected to the full year, not just the filing deadline. Income changes, business decisions, purchases, payroll, and corporate activity can all affect what needs to be filed and what should be planned for.',
			'Our approach combines preparation with practical guidance. We focus on compliance first, then help identify deductions, credits, timing issues, and planning opportunities that fit your situation.',
		],
		articleSections: [
			{
				heading: 'Preparation with context',
				body: [
					'We collect the documents, but we also ask the questions that help explain the numbers. That context is important for accurate filings and for avoiding missed details.',
					'For corporate clients, we connect the tax return to bookkeeping, shareholder activity, payroll, HST/GST, and year-end reporting so the filing reflects the business as a whole.',
				],
			},
			{
				heading: 'Planning beyond the deadline',
				body: [
					'After filing, the next question is what should change before the next year-end. We help clients understand instalments, documentation needs, compensation planning, and upcoming obligations.',
				],
			},
		],
		includes: [
			'Personal and corporate tax preparation',
			'Year-round tax planning conversations',
			'Deductions, credits, and compliance review',
			'Filing support and follow-up guidance',
		],
		whoItsFor: [
			'Individuals with more complex filings',
			'Corporations preparing for year-end',
			'Business owners who want proactive planning',
		],
		process: [
			{
				title: 'Gather documents and context',
				description: 'We identify what is required, review the facts behind the filing, and clarify any missing information before preparation begins.',
			},
			{
				title: 'Review obligations and opportunities',
				description: 'The return is prepared with attention to compliance, available deductions or credits, instalments, and planning issues that may affect the next year.',
			},
			{
				title: 'File and plan forward',
				description: 'We complete the filing and explain the practical follow-up: balances due, deadlines, records to keep, and planning items to revisit.',
			},
		],
	},
	{
		slug: 'business-advisory',
		title: 'Business Advisory',
		shortDesc: 'Financial insight, cash flow guidance, and practical advice for owners making operational and growth decisions.',
		heroDesc: 'Good advice starts with clear numbers. We help business owners understand performance, cash flow, risks, and priorities so decisions feel less uncertain.',
		overview: [
			'Business owners often have the information they need somewhere in the books, but not always in a form that supports clear decisions. Advisory work bridges that gap by turning financial records into practical conversations about the business.',
			'We focus on the questions owners are actually facing: whether cash flow can support the next move, how profitability is changing, what compliance issues need attention, and what should be prioritized first.',
		],
		articleSections: [
			{
				heading: 'Guidance grounded in your numbers',
				body: [
					'We review financial statements, cash flow patterns, margins, and recurring obligations. From there, we can discuss what the numbers suggest and where better processes or planning may help.',
				],
			},
			{
				heading: 'A practical partner for business decisions',
				body: [
					'Advisory support can help with growth planning, operational changes, business structure questions, recordkeeping processes, and preparation for year-end or financing conversations.',
				],
			},
		],
		includes: [
			'Financial review and performance discussions',
			'Cash flow and planning support',
			'Business structure and process guidance',
			'Growth, compliance, and decision support',
		],
		whoItsFor: [
			'Owners facing growth or operational decisions',
			'Businesses that need clearer financial visibility',
			'Teams looking for long-term accounting guidance',
		],
		process: [
			{
				title: 'Understand the business picture',
				description: 'We discuss your goals, current concerns, financial reports, and the decisions you are trying to make.',
			},
			{
				title: 'Identify priorities',
				description: 'We look for risks, opportunities, cash flow pressure, reporting gaps, and compliance items that should be addressed first.',
			},
			{
				title: 'Support the next steps',
				description: 'You receive practical recommendations and ongoing guidance as the business changes and new questions arise.',
			},
		],
	},
	{
		slug: 'payroll-source-deductions',
		title: 'Payroll & Source Deductions',
		shortDesc: 'Practical payroll support for source deduction remittances, employee records, and year-end reporting.',
		heroDesc: 'Payroll needs to be timely, accurate, and well documented. We support businesses with employee payroll records, source deduction remittances, and year-end payroll reporting so the process stays organized from one pay period to the next.',
		overview: [
			'Payroll administration has several moving parts: employee information, pay details, deductions, employer contributions, remittance schedules, and year-end slips. When those records are maintained consistently, payroll becomes easier to manage and easier to review.',
			'Our role is to provide dependable support around the payroll workflow, with clear records and practical follow-through for source deduction obligations.',
		],
		articleSections: [
			{
				heading: 'A cleaner payroll workflow',
				body: [
					'We help organize the payroll information behind each pay period, including employee details, deductions, employer portions, and remittance records.',
					'The result is a clearer payroll file that supports ongoing bookkeeping, source deduction remittances, and year-end payroll reporting.',
				],
			},
			{
				heading: 'Support for source deduction remittances',
				body: [
					'We help track payroll remittance requirements and maintain the records needed to support amounts remitted for employee deductions and employer contributions.',
				],
			},
		],
		includes: [
			'Payroll record organization',
			'Source deduction remittance support',
			'Employee and employer contribution tracking',
			'Year-end payroll slip support',
			'Payroll deadline and compliance assistance',
		],
		whoItsFor: [
			'Businesses with employees',
			'Employers managing recurring source deduction remittances',
			'Owners who want a more organized payroll process',
		],
		process: [
			{
				title: 'Review payroll setup',
				description: 'We review your employee records, payroll frequency, remittance schedule, and current payroll workflow.',
			},
			{
				title: 'Organize the payroll file',
				description: 'Payroll details, deductions, employer portions, and supporting records are organized for easier review and reporting.',
			},
			{
				title: 'Support ongoing remittances',
				description: 'We help maintain payroll records and deadline visibility for recurring remittances and year-end reporting.',
			},
		],
	},
	{
		slug: 'sales-tax-filing',
		title: 'Sales Tax Filing',
		shortDesc: 'HST/GST filing support for sole proprietors and corporations that collect and remit sales tax.',
		heroDesc: 'Sales tax filing is a separate compliance responsibility for businesses registered to collect HST/GST. We help sole proprietors and corporations organize sales tax collected, input tax credits, filing periods, and remittance amounts.',
		overview: [
			'Sales tax filing is not payroll and it is not income tax filing. It focuses on the HST/GST your business collected from customers, the eligible input tax credits paid on expenses, and the net amount to file or remit.',
			'Whether you operate as a sole proprietor or a corporation, organized sales tax records help reduce missed credits, unclear balances, and filing stress near deadlines.',
		],
		articleSections: [
			{
				heading: 'Clear HST/GST records for each filing period',
				body: [
					'We help organize sales, expenses, tax collected, and input tax credits so each filing period is supported by clearer records.',
					'This gives business owners a better view of what needs to be remitted and helps keep sales tax separate from income tax and payroll obligations.',
				],
			},
			{
				heading: 'Support for sole proprietors and corporations',
				body: [
					'Sales tax filing applies to both sole proprietors and corporations that are registered for HST/GST. We help confirm filing frequency, organize the numbers behind the return, and prepare records for ongoing compliance.',
				],
			},
		],
		includes: [
			'HST/GST filing support',
			'Sales tax collected and input tax credit review',
			'Filing frequency and deadline tracking',
			'Sales tax record organization for sole proprietors and corporations',
			'Follow-up guidance for remittances and records to keep',
		],
		whoItsFor: [
			'Sole proprietors registered for HST/GST',
			'Corporations with recurring sales tax filing requirements',
		],
		process: [
			{
				title: 'Confirm filing requirements',
				description: 'We review your registration, filing frequency, deadline, and the records needed for the sales tax period.',
			},
			{
				title: 'Review sales tax records',
				description: 'Sales tax collected, eligible input tax credits, and supporting documents are organized to prepare the filing.',
			},
			{
				title: 'File and plan the next period',
				description: 'We help complete the filing and clarify remittance amounts, upcoming deadlines, and records to maintain for the next period.',
			},
		],
	},
]

export function getServiceBySlug(slug: string | undefined) {
	return services.find((service) => service.slug === slug)
}
