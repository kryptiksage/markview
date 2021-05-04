import { useState } from "react";
import styles from "./Preview.module.css";
import ReactMarkdown from "react-markdown";
import { render } from "react-dom";

const Preview = () => {
	const [markdown, setMarkdown] = useState("Preview here");

	const markdownChange = (e) => {
		setMarkdown(e.target.value);
	};

	return (
		<div className={styles.container}>
			<div className={styles.markdown}>
				<h3>Markdown</h3>
				<textarea
					name="md_input"
					id="md_input"
					className={styles.md_input}
					placeholder="Type here..."
					onChange={markdownChange}
				></textarea>
			</div>
			<div className={styles.preview}>
				<h3>Preview</h3>
				<div className={styles.md_preview}>
					<ReactMarkdown>{markdown}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
};

export default Preview;
