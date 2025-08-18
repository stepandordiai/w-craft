import arrowTopIcon from "/top.png";
import "./Footer.scss";

const Footer = () => {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="footer">
			<button onClick={handleScrollToTop} className="footer__btn">
				<span>Повернутись на початок</span>
				<img src={arrowTopIcon} width={15} alt="" />
			</button>
			<p>
				Site by
				<a
					className="creator__link"
					href="https://heeeyooo.studio/"
					target="_blank"
				>
					heeeyooo studio
				</a>
			</p>
		</footer>
	);
};

export default Footer;
