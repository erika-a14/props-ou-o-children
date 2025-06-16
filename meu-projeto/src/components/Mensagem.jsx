function Mensagem(props) {
  return (
    <div>
      <h2>Olá, {props.nome}!</h2>
      <p>{props.texto}</p>
    </div>
  )
}

export default Mensagem