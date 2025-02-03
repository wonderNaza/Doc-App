import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
type LastWidgetProps = {
	text: string;
};

const InputSelect = ({ text }: LastWidgetProps) => {
	const [show, setShow] = useState(false);
	const handleSelect = () => {
		setShow((prevValue) => !prevValue);
	};

	return (
		<div className="relative  border border-[#1A0AD7] bg-[#F6F5FF] rounded-lg">
			<div className="flex justify-between items-center py-6 px-6" onClick={handleSelect}>
				<span className="font-bold text-[24px] leading-[33.6px] text-[#100F0F]">{text}</span>
				<RiArrowDropDownLine className="text-6xl text-[#100F0F]/75" />
			</div>

			{show && (
				<div className="absolute bg-slate-100 w-full space-y-4 rounded-2xl p-4 z-50 text-lg">
					<p>Industry Machine</p>
					<p>Live Focus</p>
					<p>On Progress</p>
				</div>
			)}
		</div>
	);
};

export default InputSelect;
