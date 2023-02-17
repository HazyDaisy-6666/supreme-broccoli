import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import "./App.css";

function App() {
	return (
		<div className="App">
			<body>
				<div className="outer-grid">
					<Header />
					<SideNav />
				</div>
			</body>
		</div>
	);
}

export default App;
