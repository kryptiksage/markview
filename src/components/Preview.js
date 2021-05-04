import { useState } from "react";
import styles from "./Preview.module.css";
import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";

const Preview = () => {
	const [markdown, setMarkdown] = useState("Preview here");

	const markdownChange = (e) => {
		setMarkdown(e.target.value);
	};

	const components = {
		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || "");
			return !inline && match ? (
				<SyntaxHighlighter
					style={materialOceanic}
					language={match[1]}
					PreTag="div"
					children={String(children).replace(/\n$/, "")}
					{...props}
				/>
			) : (
				<code className={className} {...props} />
			);
		},
	};

	return (
		<div className={styles.container}>
			<div className={styles.markdown}>
				<h3>Markdown</h3>
				<div className={styles.md_input}>
					<textarea
						name="md_input"
						id="md_input"
						className={styles.md_input_text}
						placeholder="Type here..."
						onChange={markdownChange}
					></textarea>
				</div>
			</div>
			<div className={styles.preview}>
				<h3>Preview</h3>
				<div className={styles.md_preview}>
					<ReactMarkdown
						components={components}
						style={materialOceanic}
						className={styles.md_preview_text}
					>
						{markdown}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	);
};

export default Preview;
