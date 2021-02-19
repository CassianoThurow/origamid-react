import React, { useEffect } from 'react'

const Produto = () => {

    useEffect(() =>{
        function handleScroll(e){
        
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })


    return (
        <div style={{height: '200vh'}}>
            <p>Meu produto</p>
        </div>
    )
}

export default Produto
