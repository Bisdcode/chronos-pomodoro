import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "light" | "dark";

export function Menu() {
	const [theme, setTheme] = useState<AvailableThemes>("dark");

	function handleThemeChange(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) {
		event.preventDefault();

		setTheme((prevTheme) => {
			const nextTheme = prevTheme === "dark" ? "light" : "dark";
			return nextTheme;
		});
	}

	// useEffect(() => {
	// 	console.log("", Date.now());
	// }); // Executando todas as vezes que o componente renderiza na tela

	// useEffect(() => {
	// 	console.log("", Date.now());
	// }, []); // Executando apenas quando o React monta o componente na tela pela primeira vez

	useEffect(() => {
		console.log("Theme mudou", theme, Date.now());
		document.documentElement.setAttribute("data-theme", theme);

		return () => {
			console.log("Olha, este componente será atualizado, função de limpeza");
		};
	}, [theme]); // Executando apenas quando o valor de Theme mudar

	return (
		<nav className={styles.menu}>
			<a
				className={styles.menuLink}
				href="#"
				aria-label="Ir para a Home"
				title="Ir para a Home"
			>
				<HouseIcon />
			</a>

			<a
				className={styles.menuLink}
				href="#"
				aria-label="Ver histórico"
				title="Ver histórico"
			>
				<HistoryIcon />
			</a>

			<a
				className={styles.menuLink}
				href="#"
				aria-label="Configurações"
				title="Configurações"
			>
				<SettingsIcon />
			</a>

			<a
				className={styles.menuLink}
				href="#"
				aria-label="Mudar tema"
				title="Mudar tema"
				onClick={handleThemeChange}
			>
				<SunIcon />
			</a>
		</nav>
	);
}
