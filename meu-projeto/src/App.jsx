import Mensagem from './components/Mensagem'

function App() {
  return (
    <div>
      <h1>Exemplo com Props</h1>
      <Mensagem nome="Érika" texto="Seja bem-vinda ao nosso sistema!" />
      <Mensagem nome="João" texto="Parabéns pelo seu progresso!" />
    </div>
  );
}

export default App