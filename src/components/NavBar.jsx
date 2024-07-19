import React, { useEffect, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import logo from '/NavLogo.svg'

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSticky, setIsSticky] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}


	// при скроле применяет sticky к nav
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsSticky(true)
			} else {
				setIsSticky(false)
			}
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.addEventListener('scroll', handleScroll)
		}
	})
	// navitems array
	const navItems = [
		{ link: 'Home', path: 'home' },
		{ link: 'Service', path: 'service' },
		{ link: 'About', path: 'about' },
		{ link: 'Product', path: 'product' },
		{ link: 'Testimonial', path: 'testimonial' },
		{ link: 'FAQ', path: 'faq' },
	]

	return (
		<header className='w-full md:bg-transparent fixed top-0 right-0 left-0'>
			<nav
				className={`py-4 lg:px-32  px-7 ${
					isSticky
						? 'sticky top-0 left-0 right-0 border-b  bg-white duration-300'
						: ''
				}`}
			>
				<div className='flex justify-between items-center text-base gap-8'>
					<a
						className='text-2xl font-semibold flex items-center space-x-3'
						href=''
					>
						<img
							className='w-10 inline-block items-center'
							src={logo}
							alt='logo'
						/>{' '}
						<span className='text-[#263238]'>NEXCENT</span>
					</a>

					{/* nav items for large devices */}
					<ul className='md:flex space-x-12 hidden'>
						{navItems.map(({ link, path }) => (
							<Link
								className=' cursor-pointer block text-base text-gray900 hover:text-brandPrimary first:font-medium transition-colors'
								key={path}
								spy={true}
								smooth={true}
								offset={-100}
								to={path}
							>
								{link}
							</Link>
						))}
					</ul>

					{/* btn for large devices */}

					<div className='space-x-12 hidden min-[1270px]:flex items-center'>
						<a
							href='/'
							className='hidden lg:flex items-center text-brandPrimary hover:text-gray900 transition-colors'
						>
							Login
						</a>

						<button className='bg-brandPrimary text-white py-2 px-4 transition-colors duration-300 rounded hover:bg-neutralDGrey'>
							Sign up
						</button>
					</div>

					{/* burger btn */}
					<div className='md:hidden'>
						<button
							onClick={toggleMenu}
							className='text-neutralDGrey focus:outline-none focus:text-gray-500'
						>
							{isMenuOpen ? (
								<FaXmark className='h-6 w-6 text-neutralDGrey' />
							) : (
								<FaBars className='h-6 w-6 text-neutralDGrey' />
							)}
						</button>
					</div>
				</div>

				{/* nav items for mobile devices */}
				<div
					className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
						isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
					}`}
				>
					{navItems.map(({ link, path }) => (
						<Link
							className=' cursor-pointer block text-base hover:text-brandPrimary first:font-medium transition-colors text-white'
							key={path}
							spy={true}
							smooth={true}
							offset={-100}
							to={path}
						>
							{link}
						</Link>
					))}
				</div>
			</nav>
		</header>
	)
}

export default NavBar
