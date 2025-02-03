type ButtonTwoProps = {
	textTwo: string;
};

const ButtonTwo = ({ textTwo }: ButtonTwoProps) => {
	return (
		<div
			className="w-[132px]  py-5 px-6 bg-[#E8E7FE] rounded-lg 
    flex items-center justify-center border-2 border-blue-500 text-[#1A0AD7] text-[16px] leading-[22.4px]"
		>
			<p>{textTwo}</p>
		</div>
	);
};

export default ButtonTwo;
