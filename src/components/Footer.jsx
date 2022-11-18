import React from 'react';
import { socialLinks } from './socialLinks';

const Footer = () => {
	return (
		<div className="my-5 container">
			{/* social links */}
			<div className="flex ">
				{socialLinks.map((social, index) => (
					<>
						<img
							className="w-10 m-3 "
							key={index}
							src={social.icon}
							alt=""
						/>
					</>
				))}
			</div>
			<div className=" lg:flex p-6">
				<p className=" py-1 mx-2 font-medium ">Privacy Policy </p>
				<p className=" py-1 mx-2 font-medium ">Cookie Preferences</p>
				<p className=" py-1 mx-2 font-medium ">CA Supply Chain Act</p>
				<p className=" py-1 mx-2 font-medium ">Terms of Use</p>
			</div>
			<p className=" mx-10 font-base ">
				© 2022 Starbucks Coffee Company. All rights reserved.
			</p>
		</div>
	);
};

export default Footer;
