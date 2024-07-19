import { Footer } from 'flowbite-react'
import {
	BsDribbble,
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsTwitter,
} from 'react-icons/bs'
import logo from '/NavLogo.svg'

const My_Footer = () => {
	return (
		<Footer className='px-24 pt-12' container>
			<div className='w-full'>
				<div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-7'>
					<div className='space-y-4 mb-8'>
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
						<div>
							<p className='mb-2'>Copyright © 2020 Nexcent ltd.</p>
							<p>All rights reserved</p>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
						<div>
							<Footer.Title title='about' />
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Flowbite</Footer.Link>
								<Footer.Link href='#'>Tailwind CSS</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title='Follow us' />
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Github</Footer.Link>
								<Footer.Link href='#'>Discord</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title='Legal' />
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Privacy Policy</Footer.Link>
								<Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
				<div className='w-full sm:flex sm:items-center sm:justify-between'>
					<Footer.Copyright href='#' by='goodWebMan' year={2024} />
					<div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
						<Footer.Icon href='#' icon={BsFacebook} />
						<Footer.Icon href='#' icon={BsInstagram} />
						<Footer.Icon href='#' icon={BsTwitter} />
						<Footer.Icon href='#' icon={BsGithub} />
						<Footer.Icon href='#' icon={BsDribbble} />
					</div>
				</div>
			</div>
		</Footer>
	)
}

export default My_Footer
