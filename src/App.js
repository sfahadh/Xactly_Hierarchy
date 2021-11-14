import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hierarchy from './components/Hierarchy';


function App() {
	return (
		<div className="App">
			<header className="App-header mt-4 mb-5">
				<h1>Quarter Sales Performance</h1>
			</header>
			<Hierarchy />
		</div>
	);
}

export default App;
