const Services = () => {
	const services = [
		{
			id: 1,
			title: 'Membership Organisations',
			description:
				'Our membership management software provides full automation of membership renewals and payments',
			image: 'icons/membership.png',
		},

		{
			id: 2,
			title: 'National Associations',
			description:
				'Our membership management software provides full automation of membership renewals and payments',
			image: 'icons/national.png',
		},

		{
			id: 3,
			title: 'Clubs And Groups',
			description:
				'Our membership management software provides full automation of membership renewals and payments',
			image: 'icons/clubs.png',
		},
	]
	return (
		<div className='md:px-52 px-4 py-16 max-w-scren-2xl mx-auto' id='service'>
			<div className='text-center my-8'>
				<h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>
					Our Clients
				</h2>
				<p className='text-gray-500'>
					We have been working with some Fortune 500+ clients
				</p>

				<div className='my-12 flex flex-wrap justify-between items-center gap-8'>
					<img src='icons/company1.png' alt='' />
					<img src='icons/company2.png' alt='' />
					<img src='icons/company3.png' alt='' />
					<img src='icons/company4.png' alt='' />
					<img src='icons/company5.png' alt='' />
					<img src='icons/company6.png' alt='' />
					<img src='icons/company7.png' alt='' />
				</div>
			</div>

			{/* Services  */}

			<div className='text-center mt-20 md:w-1/2 mx-auto'>
				<h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>
					Manage your entire community in a single system
				</h2>
				<p className='text-gray-500'>Who is Nextcent suitable for?</p>
			</div>

			{/* cards  */}
			<div className='mt-14 grid grid-cols-3 max-[1440px]:grid-cols-2 max-[1060px]:grid-cols-1 gap-12'>
				{services.map(services => (
					<div key={services.id}
						className='px-4 py-8 text-center md:w-[300px] mx-auto mdd:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'
						
					>
						<div>
							<div className='items-center justify-center flex flex-col'>
								<img src={services.image} alt={services.title} />
								<h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>
									{services.title}
								</h4>
								<p className='text-sm text-gray-500'>{services.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Services
