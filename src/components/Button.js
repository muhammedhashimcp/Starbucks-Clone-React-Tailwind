import React from 'react';

const Button = (props) => {
	return (
		<button
			className="bg-black text-white h-10 font-[Poppins] py-2 px-4  mx-3 rounded-full break-keep hover:bg-indigo-400 
    duration-500"
		>
			{props.children}
		</button>
	);
};

export default Button;
