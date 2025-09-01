import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import data from "./../../assets/data/data.json";
import Header from "../../components/Header/Header";
import "./Home.scss";

const Home = () => {
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
			</main>
		</>
	);
};

export default Home;
