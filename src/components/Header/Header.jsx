import logo from "/Frame.svg";
import "./Header.scss";

const Header = () => {
	return (
		<header className="header">
			<a className="header__logo" href="">
				<img src={logo} width={35} height={35} alt="" />
				<span>pixel flower</span>
			</a>
			<div className="menu">
				<button>Меню</button>
			</div>
		</header>
	);
};

export default Header;
