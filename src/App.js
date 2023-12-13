import './index.css';
import Header from './components/Header.js';
import Stats from './components/Stats.js';
import PackingList from './components/PackingList.js';
import Form from './components/Form.js';

const initialItems = [
  {id: 1, description:'', quantity: 1, packed: false,},
  {id: 2, description:'', quantity: 2, packed: true,},
]
function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <PackingList initialItems={initialItems} />
      <Stats />
    </div>
  );
}

export default App;
