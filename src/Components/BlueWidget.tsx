import symbolPix from '../assets/symbolPix.png';
import ButtonTwo from './ButtonTwo';

const BlueWidget = () => {
	return (
		<div className="flex">
			<div className="relative">
				<div className="bg-[#1A0AD7] py-28">
					<div className="pl-20 space-y-12 pr-52">
						<div className="space-y-5">
							<h6 className="font-bold text-[24px] leading-[33.6px] text-[#DBD8FD]">
								Help your team get better
							</h6>

							<div className="font-black text-[64px] leading-[89.6px] text-[#FCFCFC]">
								<h1>What document would you like to write?</h1>
							</div>
							<h6 className="font-medium text-[24px] leading-[38.4px] text-[#DBD8FD]">
								Just enter your text in the prompt and start in seconds...
							</h6>
						</div>
						<div className="space-y-8">
							<div className="flex">
								<div className="flex bg-indigo-400/95 items-center space-x-20 px-8 py-4 rounded-full border border-white">
									<div className="flex items-center">
										<div className="rounded-full w-4 h-4 bg-white"></div>
										<div className="w-8 h-1 bg-white"></div>
									</div>
									<span>Write Letters</span>
								</div>
							</div>

							<div className="flex">
								<div className="flex bg-indigo-500 items-center space-x-20 px-8 py-4 rounded-full border border-white">
									<div className="flex items-center">
										<div className="rounded-full w-4 h-4 bg-white"></div>
										<div className="w-8 h-1 bg-white"></div>
									</div>
									<span>Code Snippet</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-[#1A0AD700] from-80%  to-[#1A0AD7]/75 to-20%"></div>
			</div>
			<div className="space-y-24 pl-44 pr-32 pt-32">
				<div className="space-y-12">
					<img src={symbolPix} alt="symbleLogo" />
					<h4 className="font-bold text-[32px] leading-[38.4px] text-[#100F0F]">
						Write Quick Accurate Business Letter
					</h4>
					<h6 className="font-medium text-[22px] leading-[35.2px] text-[#4B4B4E]">
						With docuhelp.ai users can write detailed formal letters with 100% accurecy
					</h6>
				</div>
				<ButtonTwo textTwo="Start Writing" />
			</div>
		</div>
	);
};

export default BlueWidget;
