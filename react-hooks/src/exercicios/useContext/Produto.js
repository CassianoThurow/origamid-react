import React,{useContext} from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = useContext(GlobalContext);

console.log(global)
if(global.produto === null) return null
  return (
    <div> Produto: {global.produto.map((produto)=>(<li key={produto.id}>{produto.nome}</li>))}</div>
  );
};

export default Produto;