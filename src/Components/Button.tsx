type ButtonProp = {
	text: string;
};

const Button = ({ text }: ButtonProp) => {
	return (
		<div className="px-6 py-5 rounded-lg w-[136px] bg-[#1A0AD7] flex justify-center items-center text-[16px] leading-[22.4px] text-white">
			<p>{text}</p>
		</div>
	);
};

export default Button;
