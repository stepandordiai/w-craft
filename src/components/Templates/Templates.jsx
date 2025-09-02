import { NavLink } from "react-router-dom";
import data from "./../../assets/data/data.json";
import { useState } from "react";
import "./Templates.scss";

const Templates = () => {
	const [type, setType] = useState("bronze");

	const handleTemplatesBtn = (props) => {
		setType((prev) => (prev = props));
	};

	return (
		<div className="templates">
			<p className="options__title">Шаблони</p>
			<div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
				{data.map((envelope, index) => {
					return (
						<button
							onClick={() => handleTemplatesBtn(envelope.type)}
							className={
								envelope.type === type
									? "templates__btn templates__btn--active"
									: "templates__btn"
							}
							key={index}
						>
							{envelope.type}
						</button>
					);
				})}
			</div>
			{/* TODO: */}
			{data
				.filter((envelope) => {
					return envelope.type === type;
				})
				.map((envelope, index) => {
					return (
						<div key={index} className="template">
							<div className="template__img-container">
								{envelope.ss.map((img, index) => {
									return <img key={index} src={img} alt="" />;
								})}
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								{/* <p className="template__type">{envelope.type}</p> */}
								<p>{`0${index + 1}`}</p>
								<NavLink
									className="option__link"
									to={`/envelope-${envelope.type}/${envelope.id}`}
								>
									Дивитись шаблон
								</NavLink>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Templates;
