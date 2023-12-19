import { useState } from 'react';
import './index.css';
import Header from './components/Header.js';
import Stats from './components/Stats.js';
import PackingList from './components/PackingList.js';
import Form from './components/Form.js';


function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
