import Button from './Button';
import ButtonTwo from './ButtonTwo';
import Frame12 from '../assets/Frame12.png';

const DocuHelp = () => {
	return (
		<div className="relative  bg-[#F6F5FF]">
			<div className=" h-[176px] w-full "></div>
			<div className="h-full">
				<img src={Frame12} alt="bg image" className="w-full h-[380px]" />
			</div>
			<div className="w-[851px] mx-auto space-y-12 absolute top-36 left-[500px]">
				<div>
					<div className="font-black text-[64px] leading-[76.8px] text-[#100F0F]">
						<h1>
							DOCUHELP <span className="text-[#4435F6]">WRITES</span> BUSINESS DOCUMENTS.
						</h1>
					</div>
					<div className="text-[#4B4B4E] leading-[28px] text-[20px] font-normal w-[641px] pl-24">
						<p>
							We are a software company that help businesses build fast business documents that can
							help the business reach it goals.
						</p>
					</div>
				</div>
				<div className="flex space-x-6 pl-80">
					<Button text="Get Started" />
					<ButtonTwo textTwo="Sign In" />
				</div>
			</div>
		</div>
	);
};

export default DocuHelp;
