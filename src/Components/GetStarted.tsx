import Button from './Button';
import ButtonTwo from './ButtonTwo';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';

const GetStarted = () => {
	return (
		<div className="bg-[#FFFFFF] w-[1352px] rounded-3xl flex space-x-48 items-center mx-auto pt-28 pb-20 shadow-2xl shadow-[#D2CEFD1A]-500/500  pl-20">
			<div className="space-y-8">
				<div className="w-[291px] font-bold leading-[52px] text-[52px] text-[#100F0F]">
					<h2>Get Started for free</h2>
				</div>
				<div className="font-normal text-[18px] leading-[25.2px] text-[#4B4B4E] w-[515px] p-1">
					<p>
						Transforming Blank Pages into Captivating Narratives DocuHelp AI empowers businesses to
						discover their distinctive storytelling style
					</p>
				</div>
				<div className="flex space-x-6">
					<Button text="Get Started" />
					<ButtonTwo textTwo="Sign In" />
				</div>
			</div>

			<div className=" space-y-8">
				<div className="flex space-x-1 ">
					<span>
						<GoDotFill className="text-[#18C718] text-2xl" />
					</span>
					<span className="font-medium text-[18px] leading-[25.2px] text-[#4B4B4E]">
						Try Docuhelp Now!
					</span>
				</div>
				<div className="flex space-x-1">
					<span>
						<IoMdCheckmarkCircle className="text-[#1A0AD7] text-2xl" />
					</span>
					<span className="font-medium text-[18px] leading-[25.2px] text-[#4B4B4E]">
						No credit card required
					</span>
				</div>

				<div className="flex space-x-1">
					<span>
						<IoMdCheckmarkCircle className="text-[#1A0AD7] text-2xl" />
					</span>
					<span className="font-medium text-[18px] leading-[25.2px] text-[#4B4B4E]">
						Unlimited access
					</span>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;
