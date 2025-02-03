import BlueWidget from './Components/BlueWidget';
import DocuHelp from './Components/DocuHelp';
import Footer from './Components/Footer';
import GetStarted from './Components/GetStarted';
import LastWidget from './Components/LastWidget';
import NavBar from './Components/NavBar';
import NextProject from './Components/NextProject';
import WriteDocuHelp from './Components/WriteDocuHelp';

const App = () => {
	return (
		<div>
			<NavBar />
			<div className="mb-28">
				<DocuHelp />
			</div>
			<div className="my-20">
				<GetStarted />
			</div>
			<div className="my-16">
				<WriteDocuHelp />
			</div>
			<div className="mx-auto w-[1352px] my-28">
				<NextProject />
			</div>
			<div className="mt-16 mb-28">
				<BlueWidget />
			</div>
			<div className="mx-auto my-28">
				<LastWidget />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default App;
