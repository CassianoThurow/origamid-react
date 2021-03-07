import { useState } from 'react';

const Input = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [response, setResponse] = useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((res) => {
      setResponse(res);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={form.nome}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        name="senha"
        id="senha"
        value={form.senha}
        onChange={handleChange}
      />

      <label htmlFor="cep">Cep</label>
      <input
        type="text"
        name="cep"
        id="cep"
        value={form.cep}
        onChange={handleChange}
      />

      <label htmlFor="rua">Rua</label>
      <input
        type="text"
        name="rua"
        id="rua"
        value={form.rua}
        onChange={handleChange}
      />

      <label htmlFor="bairro">Bairro</label>
      <input
        type="text"
        name="bairro"
        id="bairro"
        value={form.bairro}
        onChange={handleChange}
      />

      <label htmlFor="cidade">Cidade</label>
      <input
        type="text"
        name="cidade"
        id="cidade"
        value={form.cidade}
        onChange={handleChange}
      />

      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        name="estado"
        id="estado"
        value={form.estado}
        onChange={handleChange}
      />
      {response && response.ok && <p>Formulário Enviado</p>}
      <button>Enviar</button>
    </form>
  );
};

export default Input;
