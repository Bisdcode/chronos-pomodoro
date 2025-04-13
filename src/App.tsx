import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

function App() {
	return (
		<div>
			<Heading>
				Olá mundo!
				<button>
					<TimerIcon />
				</button>
			</Heading>
			<p>
				Este é um exemplo de aplicação React com TypeScript e Vite.
				<br />
				<code>src/App.tsx</code>
			</p>
		</div>
	);
}

export default App;
