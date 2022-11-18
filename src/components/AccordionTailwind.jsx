import React, { useEffect, useState } from 'react';
// import { Data } from './data';
import { Data } from './footerData';

import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Accordion = () => {
	//   const { height, width } = useWindowDimensions();
	const { innerWidth: width, innerHeight: height } = window;
	console.log(
		'🚀 ~ file: AccordionTailwind.jsx ~ line 11 ~ Accordion ~ width',
		width
	);
	const [clicked, setClicked] = useState(false);

	const toggle = (index) => {
		if (clicked === index) {
			//if clicked question is already active, then close it
			return setClicked(null);
		}

		setClicked(index);
	};

	const [dimensions, setDimensions] = useState(

		{width: typeof window !== 'undefined' && window.innerWidth}
	);
	console.log("🚀 ~ file: AccordionTailwind.jsx ~ line 30 ~ Accordion ~ dimensions", dimensions)
	useEffect(() => {
		const handleResize = () => {
			setDimensions({
				width: window.innerWidth,
			});
		};
		window.addEventListener('resize', handleResize);
	}, []);

	return (
		<IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
			<div className="flex flex-col lg:flex-row items-center justify-center relative  border-y-2 border-gray-400 ">
				<div className="w-full  px-10 lg:flex  gap-3 mb-2">
					{Data.map((mainObj, index) => {
						return (
							<div className=" lg:max-w-xs min-w-xs " key={index}>
								<div
									className="flex  cursor-pointer justify-between  py-3 w-full align-center text-center"
									onClick={() => toggle(index)}
									
								>
									<h1 className="p-2 font-medium text-lg">
										{mainObj.title}
									</h1>
									<span className="mr-2 lg:hidden ">
										{clicked === index ? (
											<FiMinus />
										) : (
											<FiPlus />
										)}
									</span>
								</div>
								{width < 1024 ? (
									<>
										{clicked === index ? (
											<div className="w-full  flex flex-col  lg:max-w-xs items-center align-center border-2  ">
												{mainObj.items.map(
													(item, index) => (
														<p
															className="w-full  flex flex-col  justify-start py-2 px-2"
															key={index}
														>
															{item}
														</p>
													)
												)}
											</div>
										) : null}
									</>
								) : (
										<>
										
										<div className="  flex flex-col max-w-xs items-center align-center  ">
											{mainObj.items.map(
												(item, index) => (
													<p
														className="w-full  flex flex-col  justify-start py-2 px-2"
														key={index}
													>
														{item}
													</p>
												)
											)}
										</div>
									</>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</IconContext.Provider>
	);
};

export default Accordion;
