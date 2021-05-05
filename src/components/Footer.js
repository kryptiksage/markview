import styles from "./Footer.module.css";
import Github from "../svg/Github";
import Markview from "../svg/Markview";

const Footer = () => {
	return (
		<footer className={styles.container}>
			<Markview className={styles.markview} />
			<Github className={styles.github} />
		</footer>
	);
};

export default Footer;
