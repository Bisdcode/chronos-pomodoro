import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

function App() {
    console.log("Oi")

    return (
    <div>
        <Heading/>
        <p>
            Este é um exemplo de aplicação React com TypeScript e Vite.
            <br />
            <code>src/App.tsx</code>
        </p>
    </div>
    );
}

export default App;