import React from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.png';
import Button from './Button';
const green = '#1e3932';
const red = '#d50032';
const Box = () => {
	return (
		<>
			{/* section 1 */}
			<div className="container mx-auto  ">
				<div class="md:inline-flex m-5">
					<div className="w-full flex items-center md:w-1/2 h-auto bg-[#d50032] ">
						<img className="py-auto" src={img1} alt="" />
					</div>
					<div className="w-full md:w-1/2    h-auto bg-[#1e3932] flex  items-center ">
						<div class=" py-10   bg-[#1e3932]  w-full text-center ">
							<div class="py-3 px-6 text-lg  ">
								<h5 class="text-white text-2xl font-medium mb-2">
									Make your Rewards merrier
								</h5>
							</div>
							<div class="p-6">
								<h5 class="text-white text-xl font-medium mb-2">
									Starbucks® Rewards + Delta SkyMiles® have
									come together! Link your accounts to get 1
									mile per $1* spent at Starbucks.
								</h5>

								<button
									type="button"
									class="text-white border border-1 rounded-full inline-block px-6 py-2.5 my-1 rounded-pill font-medium text-sm   "
								>
									Link now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* section 2 */}
			<div className="container mx-auto ">
				<div class="md:inline-flex m-5">
					<div className="w-full md:w-1/2   h-auto bg-[#1e3932] flex  items-center ">
						<div class=" py-10   bg-[#1e3932]  w-full text-center ">
							<div class="py-3 px-6 text-lg  ">
								<h5 class="text-white text-2xl font-medium mb-2">
									Caramel celebration
								</h5>
							</div>
							<div class="p-6">
								<h5 class="text-white text-xl font-medium mb-2">
									Our Caramel Brulée Frappuccino® blended
									beverage is made for holiday happiness.
								</h5>

								<button
									type="button"
									class="text-white border border-1 rounded-full inline-block px-6 py-2.5 my-1 rounded-pill font-medium text-sm   "
								>
									Order now
								</button>
							</div>
						</div>
					</div>
					<div className="w-full flex items-center  md:w-1/2 h-auto bg-[#d50032] ">
						<img className="py-auto" src={img2} alt="" />
					</div>
				</div>
			</div>
			{/* section 3 */}
			<div className="container mx-auto ">
				<div class="md:inline-flex m-5">
					<div className="w-full  md:w-1/2 h-auto  bg-[#1e3932] flex  items-center ">
						<img className="py-auto" src={img3} alt="" />
					</div>
					<div className="w-full md:w-1/2  h-auto  bg-[#1e3932] flex  items-center ">
						<div class=" py-10    w-full text-center ">
							<div class="py-3 px-6 text-lg  ">
								<h5 class="text-white text-2xl font-medium mb-2">
									Sugar-plum joy
								</h5>
							</div>
							<div class="p-6">
								<h5 class="text-white text-xl font-medium mb-2">
									Here again, the Sugar Plum Cheese Danish
									delights with a cream-cheese filling and
									spiced sugar-plum spread.
								</h5>

								<button
									type="button"
									class="text-white border border-1 rounded-full inline-block px-6 py-2.5 my-1 rounded-pill font-medium text-sm   "
								>
									Order now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* section 4 */}
			<div className="container mx-auto ">
				<div class="md:inline-flex md:m-5">
					<div className="w-full md:w-1/2 bg-[#006241]  h-auto flex  items-center ">
						<div class=" py-10     w-full text-center ">
							<div class="py-3 px-6 text-lg  ">
								<h5 class="text-white text-2xl font-medium mb-2">
									Toasty all the way
								</h5>
							</div>
							<div class="p-6">
								<h5 class="text-white text-xl font-medium mb-2">
									The Double-Smoked Bacon, Cheddar & Egg
									Sandwich is a delicious protein-rich choice.
								</h5>

								<button
									type="button"
									class="text-white border border-1 rounded-full inline-block px-6 py-2.5 my-1 rounded-pill font-medium text-sm   "
								>
									Order now
								</button>
							</div>
						</div>
					</div>
					<div className="w-full  md:w-1/2 h-auto  flex  items-center  bg-[#006241]   ">
						<img className="py-auto" src={img4} alt="" />
					</div>
				</div>
			</div>
			{/* section 5 */}
			<div className="container mx-auto ">
				<div class="md:inline-flex md:m-5">
					<div className="w-full    h-auto flex justify-center  items-center ">
						<div class=" py-10    w-3/4 text-center ">
							<h5 class=" text-md font-normal ">
								*Excludes taxes and gratuities. At participating
								stores. Some restrictions apply. 150 Stars
								deposited after first qualifying Starbucks
								purchase. Flights purchased close to departure
								may not earn double Stars. Stars may not be
								earned on purchases of alcohol, Starbucks Cards
								and Starbucks Card reloads. For details, visit
								deltastarbucks.com/terms.
							</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Box;
