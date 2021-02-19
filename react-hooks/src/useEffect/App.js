import React, {useState, useEffect} from 'react'
import Produto from './Produto'


const App = () => {
    const [contar, setContar] = useState(0)
    const [dados, setDados] = useState(null)
    const [ativo, setAtivo] = useState(false)

    useEffect(()=>{
        console.log('executou')
    },[])
    useEffect(()=>{
        document.title = `total ${contar}`
    },[contar])

    useEffect(()=>{
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
        .then(response => response.json())
        .then(json => setDados(json))
    }, [])





    return (
    <>
        {dados && <div>
            <h1>{dados.nome}</h1>
            <p>{dados.preco}</p>
            </div>}
        
        <button onClick={() => setContar(contar + 1)}>{contar}</button>

        {ativo && <Produto />}
        <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </>
    )
}


export default App