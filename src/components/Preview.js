import styles from "./Preview.module.css";

const Preview = () => {
	return (
		<div className={styles.container}>
			<div className={styles.markdown}>
				<h3>Markdown</h3>
				<textarea
					name="md_input"
					id="md_input"
					className={styles.md_input}
					placeholder="Type here..."
				></textarea>
			</div>
			<div className={styles.preview}>
				<h3>Preview</h3>
				<textarea
					name=""
					id=""
					className={styles.md_preview}
					readOnly
					placeholder="Preview here"
				></textarea>
			</div>
		</div>
	);
};

export default Preview;
