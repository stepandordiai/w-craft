import checkGrayIcon from "/icons/check-gray.png";
import checkAccentIcon from "/icons/check-accent.png";
import "./Options.scss";

const Options = () => {
	return (
		<>
			<div className="options">
				<div className="option">
					<p>Bronze</p>
					<p>1000 грн</p>
					<div className="option__info">
						<p>Що входить:</p>
						<p>
							<img src={checkAccentIcon} width={20} alt="" />{" "}
							<img src={checkGrayIcon} width={20} alt="" />{" "}
						</p>
					</div>
				</div>
				<div className="option">
					<p>Silver</p>
					<p>1500 грн</p>
					<span
						style={{
							position: "absolute",
							top: 20,
							right: 20,
							background: "var(--accent-clr)",
							border: "1px solid #000",
							padding: "5px",
							borderRadius: "15px",
						}}
					>
						Популярний
					</span>
					<div className="option__info">
						<p>Що входить: </p>
					</div>
				</div>
				<div className="option">
					<p>Gold</p>
					<p>3000 грн</p>
					<div className="option__info">
						<p>Що входить:</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Options;
