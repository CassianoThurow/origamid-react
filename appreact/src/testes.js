import Header from './header'
import Footer from './footer'
import Form from './Form/Form'

const title = <h1>Esse é o titulo</h1>

const estiloP = { 
  color:"blue",
  fontSize:"14px",
}

const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

const livros = [
  { nome: 'A Game of Thrones', ano: 1996 },
  { nome: 'A Clash of Kings', ano: 1998 },
  { nome: 'A Storm of Swords', ano: 2000 },
];

const  App = () => {
  const name = 'cassiano'
  const active = true
  return (
    <>
    <Header />
    {title}

    <p style={estiloP} className={active ? 'active' : 'disabled'}>
      {name}
    </p>

    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>

    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
          <Form />

          <Footer />
    </>
  );
}

export default App;
