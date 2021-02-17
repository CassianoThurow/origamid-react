import React from 'react'
import Input from './Form/Input'

const Titulo = ( props ) =>{
    return <h1>{props.texto}</h1>
}

const App = () => {
    return ( 
        <section>
            <Titulo texto="Titulo 1" />
            <Titulo texto="Titulo 2" />
            <Input id="email" label="Email" required/>
            <Input id="password" type="password" label="Password"/>
        </section>

    )
}

export default App