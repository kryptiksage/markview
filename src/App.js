import Preview from "./components/Preview";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.container}>
			<h1>Markdown Preview</h1>
			<Preview />
		</div>
	);
}

export default App;
