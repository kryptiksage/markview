import styles from "./Preview.module.css";

const Preview = () => {
	return (
		<div className={styles.container}>
			<textarea
				name="md_input"
				id="md_input"
				className={styles.md_input}
			></textarea>
			<textarea name="" id="" className={styles.md_preview} readOnly>
				Hello
			</textarea>
		</div>
	);
};

export default Preview;
