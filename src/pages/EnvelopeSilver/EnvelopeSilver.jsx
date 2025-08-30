import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import img from "/corner.svg";
import img2 from "/underline.svg";
import heartIcon from "/heart2.png";
import data from "./../../assets/data/data.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-cards";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";

import { useParams } from "react-router-dom";

import "./EnvelopeSilver.scss";

const EnvelopeSilver = () => {
	const { id } = useParams();

	const envelope = data.find((envelope) => envelope.id == id);

	// TODO:
	const targetDate = new Date(envelope.countdown);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		let interval = setInterval(() => {
			const date = new Date();
			const dateDifference = targetDate - date;
			setDays(Math.floor(dateDifference / 1000 / 60 / 60 / 24));
			setHours(Math.floor((dateDifference / 1000 / 60 / 60) % 24));
			setMinutes(Math.floor((dateDifference / 1000 / 60) % 60));
			setSeconds(Math.floor((dateDifference / 1000) % 60));

			if (dateDifference <= 0) {
				clearInterval(interval);
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
				handleClick();
			}
		}, 1000);

		const animatedElements = document.querySelectorAll(".animated-element");

		window.addEventListener("scroll", () => {
			animatedElements.forEach((el) => {
				const elRect = el.getBoundingClientRect();

				if (elRect.top < window.innerHeight - 100) {
					el.classList.add("animated-element--active");
				}
			});
		});

		animatedElements.forEach((el) => {
			const elRect = el.getBoundingClientRect();

			if (elRect.top < window.innerHeight - 100) {
				el.classList.add("animated-element--active");
			}
		});
	}, []);

	const handleClick = () => {
		const duration = 5 * 1000;
		const animationEnd = Date.now() + duration;
		const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

		const randomInRange = (min, max) => Math.random() * (max - min) + min;

		const interval = window.setInterval(() => {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			const particleCount = 50 * (timeLeft / duration);
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
			});
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
			});
		}, 250);
	};

	// TODO:
	function getDaysOfMonth(year, month) {
		// month is 0-indexed in JS (0 = January, 1 = February, ...)
		const days1 = [];
		const date1 = new Date(year, month, 1); // start of month

		while (date1.getMonth() === month) {
			days1.push(new Date(date1)); // push a copy of the current day
			date1.setDate(date1.getDate() + 1); // move to next day
		}

		return days1;
	}

	const days2 = [];

	const firstDay = new Date(envelope.year, envelope.month - 1, 1); // August 1, 2025
	let startWeekday = firstDay.getDay(); // 0 = Sunday, 1 = Monday, ...

	const febDayNumbers = getDaysOfMonth(envelope.year, envelope.month - 1).map(
		(d) => d.getDate()
	);

	startWeekday = (startWeekday + 6) % 7; // now Monday=0, Tuesday=1, ...

	for (let i = 0; i < startWeekday; i++) {
		days2.push(null); // empty slot
	}

	days2.push(...febDayNumbers);

	let txtMonth;

	switch (envelope.month) {
		case 1:
			txtMonth = "Січень";
			break;
		case 2:
			txtMonth = "Лютий";
			break;
		case 3:
			txtMonth = "Березень";
			break;
		case 4:
			txtMonth = "Квітень";
			break;
		case 5:
			txtMonth = "Травень";
			break;
		case 6:
			txtMonth = "Червень";
			break;
		case 7:
			txtMonth = "Липень";
			break;
		case 8:
			txtMonth = "Серпень";
			break;
		case 9:
			txtMonth = "Вересень";
			break;
		case 10:
			txtMonth = "Жовтень";
			break;
		case 11:
			txtMonth = "Листопад";
			break;
		case 12:
			txtMonth = "Грудень";
			break;
	}

	useEffect(() => {
		const scroll = document.querySelector(".scroll");

		window.addEventListener("scroll", () => {
			if (document.documentElement.scrollTop > 0) {
				scroll.classList.add("scroll--hide");
			} else {
				scroll.classList.remove("scroll--hide");
			}
		});
	}, []);
	return (
		<main className="envelope-silver">
			<div className="envelope-silver__top frame">
				<img className="corner-top-right" src={img} alt="" />
				<img className="corner-bottom-right" src={img} alt="" />
				<img className="corner-bottom-left" src={img} alt="" />
				<img className="corner-top-left" src={img} alt="" />

				<div className="envelope-silver__top-logo animated-element">
					<span>{envelope.name_1[0]}</span>
					<span>{envelope.name_2[0]}</span>
				</div>
				{/* <div className="divider"></div> */}
				{/* <div className="home__top-date">
						<p>{envelope.date}</p>
						<span>/</span>
						<p>{envelope.month.toString().padStart(2, 0)}</p>
						<span>/</span>
						<p>{envelope.year.toString().slice(2)}</p>
					</div> */}
				{/* <div> */}
				{/* <div> */}
				<div className="envelope-silver__top-title animated-element">
					<span>{envelope.name_1}</span>
					<span>та</span>
					<span>{envelope.name_2}</span>
				</div>
				{/* <img className="underline" src={img2} alt="" /> */}
				{/* </div> */}
				<p className="envelope-silver__top-date animated-element">
					Неділя, 14 Вересня, 2025
				</p>
				<div className="font scroll animated-element">
					Прокрутіть вниз, щоб дізнатися більше
				</div>
			</div>
			<div className="frame">
				<img className="corner-top-right" src={img} alt="" />
				<img className="corner-bottom-right" src={img} alt="" />
				<img className="corner-bottom-left" src={img} alt="" />
				<img className="corner-top-left" src={img} alt="" />
				<div className="frame-inner">
					<p className="m-size animated-element">Дорогі гості</p>
					<p className="desc font animated-element">
						Ми надзвичайно раді поділитися з Вами цим особливим днем!
						<br />
						<br />
						Розпочинаючи нашу спільну подорож, ми будемо щасливі, якщо Ви
						приєднаєтеся до святкування нашого весілля.
						<br />
						<br />
						Тут ви знайдете всю необхідну інформацію - розклад подій, зворотний
						відлік, інформацію про місце проведення, галерею та інше.
						<br />
						<br />
						Ваша присутність для нас безцінна, і ми з нетерпінням чекаємо, щоб
						розділити радість, сміх і любов цього дня.
						<br />
						<br />
					</p>
					<div className="silver-calendar-wrapper animated-element">
						<p className="silver-calendar-top">{`${txtMonth} ${envelope.year}`}</p>
						<div className="silver-calendar">
							<div>Пн</div>
							<div>Вт</div>
							<div>Ср</div>
							<div>Чт</div>
							<div>Пт</div>
							<div>Сб</div>
							<div>Нд</div>
							{days2.map((day, index) => {
								return (
									<div
										key={index}
										className={day === envelope.date ? "target-time" : ""}
									>
										{day}
										{day === envelope.date && (
											<img className="calendar-heart" src={heartIcon} alt="" />
										)}
									</div>
								);
							})}
						</div>
					</div>
					<p className="s-size animated-element">
						Давайте створимо спогади, які залишаться на все життя!
					</p>
				</div>
			</div>
			<div className="frame">
				<img className="corner-top-right" src={img} alt="" />
				<img className="corner-bottom-right" src={img} alt="" />
				<img className="corner-bottom-left" src={img} alt="" />
				<img className="corner-top-left" src={img} alt="" />
				<div className="frame-inner">
					<p className="m-size animated-element">
						Зворотний відлік до нашого Великого дня
					</p>
					<div className="font silver-date animated-element" id="date">
						<div>
							<span>{days}</span>
							<span>днів</span>
						</div>
						<div>
							<span>{hours}</span>
							<span>годин(а)</span>
						</div>
						<div>
							<span>{minutes}</span>
							<span>хвилин(а)</span>
						</div>
						<div>
							<span>{seconds}</span>
							<span>секунд(а)</span>
						</div>
					</div>
				</div>
			</div>
			<div className="frame">
				<img className="corner-top-right" src={img} alt="" />
				<img className="corner-bottom-right" src={img} alt="" />
				<img className="corner-bottom-left" src={img} alt="" />
				<img className="corner-top-left" src={img} alt="" />
				<div className="frame-inner">
					<div>
						<p className="m-size animated-element">Адреси святкування</p>
						<p className="font animated-element">{`(місцевий час, ${envelope.place})`}</p>
					</div>
					<div className="silver-addresses">
						{envelope.adresess.map((address, index) => {
							return (
								<div key={index} className="silver-address">
									<p
										style={{ display: "flex", justifyContent: "space-between" }}
										className="s-size animated-element"
									>
										<span>{address.title}</span>
										<span>{address.time}</span>
									</p>
									<br />
									<p className="font animated-element">
										{address.address_title}
									</p>
									<br />
									<p
										style={{ marginBottom: 10 }}
										className="font animated-element"
									>
										{address.address}
									</p>
									<br />
									<iframe
										className="silver-map animated-element"
										src={address.address_url}
										loading="lazy"
									></iframe>
									<br />
									<a
										className="silver-address__link animated-element"
										href={address.address_destination_url}
										target="_blank"
									>
										Отримати маршрут
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* <div className="colors-container">
				<p className="page-title">Дрес-код</p>
				<div>
					<p className="pepe">
						Будемо раді, якщо Ви підтримаєте кольорову гаму нашого весілля
					</p>
					<div className="colors">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div> */}
			<div className="frame">
				<img className="corner-top-right" src={img} alt="" />
				<img className="corner-bottom-right" src={img} alt="" />
				<img className="corner-bottom-left" src={img} alt="" />
				<img className="corner-top-left" src={img} alt="" />
				<div className="frame-inner">
					<p className="m-size animated-element">Галерея</p>
					<Swiper
						effect={"fade"}
						loop={true}
						speed={1000}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						modules={[EffectFade, Autoplay]}
						className="silver-swiper animated-element"
					>
						{envelope.gallery.map((img, index) => {
							return (
								<SwiperSlide key={index} className="slide">
									<img src={img} alt="" loading="lazy" />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
			<div className="frame">
				<img className="corner-top-right" src={img} alt="" />
				<img className="corner-bottom-right" src={img} alt="" />
				<img className="corner-bottom-left" src={img} alt="" />
				<img className="corner-top-left" src={img} alt="" />
				<div className="frame-inner">
					<p className="m-size animated-element">
						Ми з нетерпінням чекаємо, щоб відсвяткувати разом з вами!
					</p>
					<div className="envelope-silver__top-logo animated-element">
						<span>{envelope.name_1[0]}</span>
						<span>{envelope.name_2[0]}</span>
					</div>
				</div>
			</div>
		</main>
	);
};

export default EnvelopeSilver;
