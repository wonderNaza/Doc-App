import Button from './Button';
import maleImage from '../assets/maleImage.png';

const WriteDocuHelp = () => {
	return (
		<div className="flex justify-center items-centerbg-[#FFFFFF] shadow-2xl w-[1352px] rounded-3xl mx-auto  pt-32 mb-10">
			<div className="space-y-8 pl-20">
				<div className="space-y-8">
					<div className="font-black text-[64px] leading-[76.8px] text-[#100F0F] w-[403px]">
						<h1>Write with docuhelp</h1>
					</div>
					<div className="font-normal text-[18px] leading-[28.8px] text-[#4B4B4E] w-[488px] p-1">
						<p>
							Generate professional graded documents, reports, proposal, sales pitch in a matter of
							minutes and empower your team to work together in real time, ensuring accuracy and
							efficiency. No more email chains or confusion—just smooth, simultaneous collaboration.
						</p>
					</div>
				</div>
				<div>
					<Button text="Get Started" />
				</div>
			</div>
			<div className="w-[1017px]">
				<img src={maleImage} alt="male  with laptop " className="rounded-3xl" />
			</div>
		</div>
	);
};

export default WriteDocuHelp;
