import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import data from "./../../assets/data/data.json";
import Header from "../../components/Header/Header";
import Options from "../../components/Options/Options";
import { useEffect } from "react";
import "./Home.scss";

const Home = () => {
	useEffect(() => {
		document.body.style.overflow = "auto";
	}, []);

	return (
		<>
			<Helmet>
				<title>Весільні сайт-запрошення &sim; pixel flower</title>
			</Helmet>
			<Header />
			<main className="home">
				{data.map((envelope, index) => {
					return (
						<NavLink
							key={index}
							to={`/envelope-${envelope.type}/${envelope.id}`}
						>
							{envelope.id}
						</NavLink>
					);
				})}
				<Options />
			</main>
		</>
	);
};

export default Home;
