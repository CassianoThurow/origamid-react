import React, {useState}  from 'react'
import Produtos from './Produtos'

const UseStateResolve = () => {

    const [dados, setDados] = useState(null)
    const [load, setLoad] = useState(null)

   async function handleClick(e){
       setLoad(true);
       const response = await fetch(
           `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
           )
           const json = await response.json()
           setDados(json)
           setLoad(false)
    }    


    return (
        <div>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
            <button onClick={handleClick}>tablet</button>
            {load && <p>Carregando...</p>}
            {!load && dados && <Produtos dados={dados}/>}
        </div>
    )
}

export default UseStateResolve
