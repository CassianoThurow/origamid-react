import React from 'react'
import UseLocalStorage from './useLocalStorage'

 const app = () => {
     const [ produto, setProduto] = UseLocalStorage('produto', '')

     function handleClick({target}){
         setProduto(target.innerText)
     }

    return (
        <div>
            <p>produto prefetido: {produto}</p>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
        </div>
    )
}

export default app