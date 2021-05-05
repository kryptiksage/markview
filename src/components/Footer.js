import styles from "./Footer.module.css";
import Github from "../svg/Github";
import Markview from "../svg/Markview";

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.title}>
				<Markview className={styles.markview} />
			</div>
			<div className={styles.repo}>
				<a
					href="https://github.com/kryptiksage/markview"
					target="_blank"
				>
					<Github className={styles.github} />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
