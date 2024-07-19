const NewsLetter = () => {
	return (
		<div className='px-4 lg:px-14  mx-auto bg-neutralSilver py-16'>
			<div className='flex items-center justify-center lg:w-2/5 mx-auto'>
				<div className='text-center'>
					<h2 className='lg:text-6xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug '>
						Pellentesque suscipit fringilla libero eu.
					</h2>

					<div className='flex items-center justify-center gap-8'>
						<button className='btn-primary'>
							Get a Demo
							<svg
								className='inline-block ml-4 '
								width='17'
								height='11'
								viewBox='0 0 17 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905'
									stroke='#FFFFFF'
									stroke-width='1.5'
									stroke-linecap='round'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsLetter
