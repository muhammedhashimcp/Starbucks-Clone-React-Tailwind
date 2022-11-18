import React, { useState } from 'react';
import Button from './Button';
import logo from '../img/logo.png';
import marker from '../img/marker.svg';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbarnew1 = () => {
	let Links = [
		{ name: 'menu', link: '/' },
		{ name: 'rewards', link: '/' },
		{ name: 'gift cards', link: '/' },
	];
	let [open, setOpen] = useState(false);
	return (
		<nav className="shadow-md w-full  sticky top-0 left-0 z-50 max-sm md:max-md md:mr-0 ">
			<div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 ">
				<div
					className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
                text-gray-800"
				>
					<a href="">
						<img
							className="h-[60px] w-[60px] ml-15px"
							src={logo}
							alt={logo}
						/>
					</a>
					<ul
						className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in uppercase  ${
							open ? 'top:8rem ' : 'top-[-490px]'
						}`}
					>
						{Links.map((link) => (
							<li key={link.name} className="text-base mx-2">
								<a
									href={link.link}
									className="text-gray-800 hover:text-gray-400 duration-500"
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				{/* hamberger */}

				<div>
					<div
						onClick={() => setOpen(!open)}
						className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
					>
						<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
					</div>

					<ul
						className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
							open ? 'top:8rem ' : 'top-[-490px]'
						}`}
					>
						<li className="group  text-xl  inline-flex">
							<img src={marker} alt="" className="w-6 h-auto " />
							<a
								href="hellos"
								className="text-gray-800 text-base duration-500 group-hover:text-green-600"
							>
								Find a store
							</a>
						</li>
						<li className=" ">
							<Button>sign in</Button>
						</li>
						<li className=" ">
							<Button>Join now</Button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbarnew1;
