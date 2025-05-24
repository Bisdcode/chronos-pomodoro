import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

type AvailableThemes = "light" | "dark";

export function Menu() {
	const [theme, setTheme] = useState<AvailableThemes>("dark");

	function handleThemeChange(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) {
		event.preventDefault();

		console.log("Clicado", Date.now());
	}

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
