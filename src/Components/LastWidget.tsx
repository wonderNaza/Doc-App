import InputSelect from './InputSelect';

const LastWidget = () => {
	return (
		<div className="w-[706px] mx-auto space-y-6">
			<h1 className="font-black text-[64px] leading-[89.6px] text-[#1A0AD7] text-center">
				Why Docuhelp?
			</h1>
			<div className="space-y-11">
				<InputSelect text="Industry focus" />
				<InputSelect text="Access to Backends" />
				<InputSelect text="Trained on your data" />
			</div>
		</div>
	);
};

export default LastWidget;
