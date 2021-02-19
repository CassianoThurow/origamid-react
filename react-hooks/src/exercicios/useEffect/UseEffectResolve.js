import React, {useState, useEffect } from 'react'
import Produto from './Produto'

const UseEffectResolve = () => {
    const [ produto, setProdutos] = useState(null)

    function handleClick({target}){
        setProdutos(target.innerText)
    }

    useEffect(()=>{
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal !== null) setProdutos(produtoLocal)
    },[])

    useEffect(()=>{
        if(produto !== null)
        window.localStorage.setItem('produto', produto)
    },[produto])

    return (
        <div>
            <h1>Preferencia: {produto}</h1>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
            <Produto produto={produto} />
        </div>
    )
}

export default UseEffectResolve
