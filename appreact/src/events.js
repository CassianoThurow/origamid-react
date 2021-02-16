import React from 'react'


const App = () => {
    function handleClick(e){
        alert('Comprou: ' + e.target.innerText)
    }
    function handleScroll(e){
        console.log(e)
    }

    window.addEventListener('scroll', handleScroll)

    return (
        <div style={{height:'200vh'}}>
            <button onClick={handleClick}>Camiseta</button>
            <button onClick={(e)=> alert(e)}>Teste</button>
        </div>
    )
}

export default App;