import './App.css';

import Desafio from './componentes/Desafio/Desafio.jsx'
import Numero from './componentes/Numero/Numero.jsx'
import Propriedades from './componentes/Propriedades/Propriedades.jsx'
import Sorteio from './componentes/Sorteio/Sorteio.jsx'
import Recesso from './componentes/Recesso/Recesso.jsx'


function App() {
	return (
		<div className='App'>
			<h1>PROJETO AVALIATIVO REACT-REDUX 1º BIMESTRE</h1>
			<Desafio />
			<Numero />
			<Propriedades titulo="QUAL SUA NOTA?" aluno="Vinícius Marteleto" />
			<Sorteio />
			<Recesso />
		</div>
	)
}

export default App;
