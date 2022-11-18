import React, { useState } from 'react';
import Button from './Button';
import logo from '../img/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbarnew = () => {
	let Links = [
		{ name: 'Cart', link: '/' },
		{ name: 'Wishlist', link: '/' },
		{ name: 'SignIn', link: '/register' },
	];
	let [open, setOpen] = useState(false);
	return (
		<nav className="shadow-md w-full  sticky top-0 left-0 z-50 max-sm md:max-md md:mr-0 ">
			<div className="md:flex items-center  bg-white py-4 md:px-10 px-7 ">
				<div
					className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
                text-gray-800"
				>
					<a href="#">
						<img
							className="h-[60px] w-[60px] ml-15px"
							src={logo}
							alt={logo}
						/>
					</a>
				</div>
				<div className="flex justify-between">
					<div
						onClick={() => setOpen(!open)}
						className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
					>
						<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
					</div>

					{/* <div className="flex justify-between"> */}
					<ul
						className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
							open ? 'top:8rem ' : 'top-[-490px]'
						}`}
					>
						{Links.map((link) => (
							<li
								key={link.name}
								className="md:ml-8 text-xl md:my-0 my-7"
							>
								<a
									href={link.link}
									className="text-gray-800 hover:text-gray-400 duration-500"
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>
					<ul
						className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] right-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
							open ? 'top:8rem ' : 'top-[-490px]'
						}`}
					>
						{Links.map((link) => (
							<li
								key={link.name}
								className="md:ml-8 text-xl md:my-0 my-7"
							>
								<a
									href={link.link}
									className="text-gray-800 hover:text-gray-400 duration-500"
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>
					{/* </div> */}
				</div>
			</div>
		</nav>
	);
};

export default Navbarnew;
