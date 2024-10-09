import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  // Função para adicionar texto na lista
  const handleAddText = () => {
    if (text.trim()) {
      setItems([...items, text]);
      setText(''); // Limpa o campo de input após adicionar
    }
  };

  // Função para remover texto da lista
  const handleRemoveText = (indexToRemove) => {
    const newItems = items.filter((item, index) => index !== indexToRemove);
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>Formulário de Textos</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite um texto"
        />
        <button onClick={handleAddText}>Adicionar</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemoveText(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
