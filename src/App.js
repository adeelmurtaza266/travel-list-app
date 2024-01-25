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

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id!== id));
  }
  function handleUpdateItem(id) {
    setItems((items) => items.map((item) => item.id === id? {...item, packed:!item.packed } : item));
  }
  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to clear the list?');
    if(confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleRemoveItem} onUpdateItem={handleUpdateItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}

export default App;
