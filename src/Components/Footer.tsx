import Button from './Button';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import logo from '../assets/logoImage.png';
import { GrLinkedin } from 'react-icons/gr';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="bg-[#0D0C0D] ">
			<div className="flex space-x-11 pl-16 py-32">
				<div className="space-y-6">
					<h2 className="font-bold text-[40px] leading-[48.28px] text-[#FCFCFC] pr-48">
						Stay In Touch With Us
					</h2>
					<p className="font-normal text-[16px] leading-[25.6px] text-[#FCFCFC]">
						The latest Docuhelp news, articles, and resources, sent straight to your inbox every
						month.
					</p>
					<div className="bg-[#EDEBFE] border border-[#1A0AD7] rounded-xl flex space-x-40 px-6 py-3 items-center">
						<span className="font-normal text-[16px] leading-[25.6px] text-[#776DF8]">
							Email Address
						</span>
						<Button text="Subscribe" />
					</div>
				</div>
				<div className="flex space-x-11">
					<div className="space-y-5 pl-10">
						<h4 className="font-bold text-[18px] leading-[25.2px] text-[#FCFCFC]">Company</h4>
						<div className="font-normal text-[16px]leading-[22.4px] text-[#FCFCFC] space-y-3">
							<p className="w-[128px]">3d7 Technologies</p>
							<p>Products</p>
							<p>Legal</p>
						</div>
					</div>

					<div className="space-y-5 ">
						<h4 className="font-bold text-[18px] leading-[25.2px] text-[#FCFCFC]">Contact Us</h4>
						<div className="space-y-3">
							<div className="flex space-x-2 items-center">
								<AiOutlineMail className="text-[#FCFCFC]" />
								<span className="font-normal text-[16px] leading-[22.4px] text-[#FCFCFC]">
									help@docuhelp.ai
								</span>
							</div>
							<div className="flex space-x-2 items-center w-[243px]">
								<IoLocationOutline className="text-[#FCFCFC]" />
								<span className="font-normal text-[16px] leading-[22.4px] text-[#FCFCFC] ">
									Manchester, United Kingdom
								</span>
							</div>
							<div className="flex space-x-2 items-center">
								<LuPhone className="text-[#FCFCFC]" />
								<span className="font-normal text-[16px] leading-[22.4px] text-[#FCFCFC]">
									+1 544312378
								</span>
							</div>
						</div>
					</div>
					<div className="space-y-6 pr-60 pl-36">
						<div className="flex space-x-1">
							<img src={logo} alt="companyLogoImage" className="text-[#4435F6]" />
							<span className="font-bold text-[24px] leading-[28.97px] text-[#4435F6]">
								docuhelp.ai
							</span>
						</div>
						<div className="space-y-2 pr-16">
							<h5 className="font-bold text-[16px] leading-[22.4px] text-[#FCFCFC]">
								Write business documents.
							</h5>
							<p className="font-light text-base leading-[25.6px] text-[#FCFCFC]">
								DocuHelp may produce inaccurate information about people, places, or facts and may
								also display inaccurate or offensive information that doesn’t represent 3d7
								Technologies views.
							</p>
						</div>
					</div>
				</div>
			</div>

			<hr className="bg-[#99999980] h-1" />

			<div>
				<div className="flex justify-between items-center py-10 px-28 ">
					<div className="flex space-x-4 items-center">
						<img src={logo} alt="company logo" className="text-[#4435F6]" />
						<span className="font-normal text-sm leading-3 text-[#FCFCFC]">
							© 2023 docuhelp.ai | Security | Your Privacy | Terms
						</span>
					</div>
					<div className="flex space-x-4 text-3xl">
						<GrLinkedin className="text-[#FCFCFC]" />
						<ImFacebook2 className="text-[#FCFCFC]" />
						<FaInstagram className="text-[#FCFCFC]" />
						<FaTwitter className="text-white" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
