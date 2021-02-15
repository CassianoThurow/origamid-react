// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem


const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  
  const Exercicio01 = () => {
    const dados = luana;
    const total = dados.compras.map((item) => Number(item.preco.replace('R$ ', ''))).reduce((a, b)=>a + b)

  
    return (
        <div>
           <p>nome: { dados.cliente}</p>
           <p>idade: { dados.idade}</p>
           <p>total: { total}</p>
           <p>situação: <span style={{color:dados.ativa ? 'green' : "red"}}>{dados.ativa ? 'Ativo' : "inativo"}</span> </p>
           {total > 10000 && <p>voce esta gastando muito</p>}
        </div>
    )
  };


  export default Exercicio01;
  