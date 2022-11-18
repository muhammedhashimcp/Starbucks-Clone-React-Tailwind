import React, { useState } from 'react';

export default function Navbar1() {
	const [sidebar, setSidebar] = useState(false);

	return (
		<nav className="w-full bg-white shadow ">
			<div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8 p-5">
				<div className=" ">
					<ul className="items-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
						<li className="text-black hover:text-blue-600">
							<a
								href="javascript:void(0)"
								className=" font-bold text-xl"
							>
								Customer Support
							</a>
						</li>
					</ul>
					<div className="text-sm font-semibold text-gray-600 ">
						Area Name | Phone Number, Email Here
					</div>
				</div>
				<div className=" flex">
					<img
						src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
						alt="P"
						className="rounded-full w-10 h-10"
					/>
				</div>
			</div>
		</nav>
	);
}
