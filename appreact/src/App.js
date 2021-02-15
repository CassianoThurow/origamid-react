
const title = <h1>Esse é o titulo</h1>

const estiloP = { 
  color:"blue",
  fontSize:"14px",
}

const  App = () => {
  const name = 'cassiano'
  const active = true
  return (
    <>
    {title}
    <p style={estiloP} className={active ? 'active' : 'disabled'}>
      {name}
    </p>
    </>
  );
}

export default App;
