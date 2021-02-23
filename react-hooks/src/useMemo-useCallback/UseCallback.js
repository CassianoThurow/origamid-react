import React, {useState, useCallback} from 'react'

const UseCallback = () => {
    const [contar, setContar] = useState(0)

    const handleClick = useCallback(()=>{
        setContar((contar) => contar +1 )
    },[])

    return (
        <button onClick={handleClick}>
            {contar}
        </button>
    )
}

export default UseCallback
