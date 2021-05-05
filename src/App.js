import Preview from "./components/Preview";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.container}>
			<Preview />
			<Footer />
		</div>
	);
}

export default App;
