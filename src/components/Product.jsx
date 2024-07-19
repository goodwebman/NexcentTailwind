import product from '/product1.png'
import tesla from '/tesla.png'

const Product = () => {
	return (
		<div id='product'>
			<div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 pb-20'>
				<div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
					<div>
						<img src={product} alt='about' />
					</div>
					<div className='md:w-3/5 mx-auto'>
						<h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
							How to design your site footer like we did
						</h2>
						<p className='md:w-3/4 text-sm text-gray-500 mb-8'>
							Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
							augue nec tincidunt molestie, massa nunc varius arcu, at
							scelerisque elit erat a magna. Donec quis erat at libero ultrices
							mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
							dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
							ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
							commodo faucibus efficitur quis massa. Praesent felis est, finibus
							et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
							ipsum id gravida.
						</p>
						<button className='btn-primary'>Learn More</button>
					</div>
				</div>
			</div>

			<div className='px-4 lg:px-60  mx-auto bg-neutralSilver py-16'>
				<div className='flex flex-col xl:flex-row justify-between items-center gap-8  '>
					<div className='md:w-1/3 pt-8  min-[900px]:block'>
						<img src={tesla} alt='' />
					</div>

					<div className='md:w-2/3 mx-auto'>
						<p className='md:w-4/5 text-s, text-gray-600 mb-8 leading-7'>
							Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
							lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
							enim metus. Vivamus sed libero ornare, tristique quam in, gravida
							enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
							elit at ligula molestie, nec molestie mi blandit. Suspendisse
							cursus tellus sed augue ultrices, quis tristique nulla sodales.
							Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
							potenti. Quisque malesuada enim sapien, vitae placerat ante
							feugiat eget. Quisque vulputate odio neque, eget efficitur libero
							condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
							amet magna.
						</p>

						<h5 className='text-brandPrimary text-xl mb-2 font-semibold'>
							Tim Smith
						</h5>
						<p className='text-base text-gray-500 mb-8'>
							British Dragon Boat Racing Association
						</p>
						<div>
							<div className='flex items-center gap-8 flex-wrap'>
								<img
									className='cursor-pointer'
									src=''
									alt=''
								/>

								<img
									className='cursor-pointer'
									src='icons/company2.png'
									alt=''
								/>

								<img
									className='cursor-pointer'
									src='icons/company3.png'
									alt=''
								/>

								<img
									className='cursor-pointer'
									src='icons/company4.png'
									alt=''
								/>

								<img
									className='cursor-pointer'
									src='icons/company5.png'
									alt=''
								/>

								<img
									className='cursor-pointer'
									src='icons/company6.png'
									alt=''
								/>
								<div className='flex items-center gap-8'>
									<a
										href='/'
										className='font-bold text-brandPrimary hover:text-neutral-700'
									>
										Meet all customers
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
												stroke='#4CAF4F'
												stroke-width='1.5'
												stroke-linecap='round'
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
