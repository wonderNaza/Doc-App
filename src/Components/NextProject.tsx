import femaleCopImage from '../assets/femaleCopImage.png';
import Button from './Button';
const NextProject = () => {
	return (
		<div className="flex space-x-20 bg-[#FFFFFF] rounded-3xl shadow-2xl pt-16">
			<div className="w-[610px] pl-24">
				<div className="w-[610px] h-40 border-b-4 border-b-[#1A0AD7]"></div>
				<div className="py-10">
					<p className=" font-black text-[40px] leading-[56px] text-[#1A0AD7] uppercase">
						Use DocuHelp to write documents for your business, work report, and proposals for your
						next project!
					</p>
				</div>
				<Button text="Get Started" />
			</div>
			<div>
				<img src={femaleCopImage} alt="female with laptop iamge" />
			</div>
		</div>
	);
};

export default NextProject;
