import React, {useState, useMemo }from 'react'


function slowOp(){
    let c;
    for(let i = 0; i < 10000000; i++ ){
        c = i + i / 10
    }
    return c
}


const UseMemo = () => {
const [ contar , setContar ] = useState(0)

// const valor = useMemo(()=>{
//     const localItem = window.localStorage.getItem('produto')
//     console.log('aconteceu o memo')
//     return localItem
// },[]);

const t1 = performance.now();
const valor = useMemo(() => slowOp(),[])
console.log(valor)
console.log(performance.now() - t1 )


    return (
        <button onClick={()=>{setContar(contar +1 );}}>
            {contar}
        </button>
    )
}

export default UseMemo
