import logoImage from '../assets/logoImage.png';
import Button from './Button';
import ButtonTwo from './ButtonTwo';
const NavBar = () => {
	return (
		<div className="flex space-x-[1000px] items-center pl-8">
			<div className="flex space-x-6  items-center">
				<div className="flex space-x-2 items-center">
					<img src={logoImage} alt="org Logo" />
					<span>
						<p>docuhelp.ai</p>
					</span>
				</div>
				<span>|</span>
				<span>
					<p>Support</p>
				</span>
				<span>
					<p>Pricing</p>
				</span>
			</div>
			<div className="flex font-bold space-x-7 py-6">
				<div>
					<Button text="Get started" />
				</div>
				<div>
					<ButtonTwo textTwo="Sign in" />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
