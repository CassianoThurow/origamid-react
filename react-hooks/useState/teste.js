import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal'

const App = () => {
  
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Cassiano', idade: '25' });
  const [ modal, setModal] = React.useState(false);
  const [ itens, setItens] = React.useState('Teste')

  function handleClick(){
    setAtivo(!ativo)
    setDados({...dados, faculdade: 'Possui faculdade'})
    setItens('Outro')
  }

  return (

    <>

    <button onClick={handleClick}>{ativo ? 'botao ativo': 'botao desativo'}
    </button>
    <p>{dados.nome}</p>
    <p>{dados.idade}</p>
    <p>{dados.faculdade}</p>

    <button onClick={handleClick}>Clicar</button>
    <p>{itens}</p>

    <div>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal} />
    </div>
    
    </>
    
  );
}

export default App;
