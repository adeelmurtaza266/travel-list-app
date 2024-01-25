import { useState } from 'react';
import '../index.css';

function PackingList({ items, onDeleteItem, onUpdateItem, onClearList}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if(sortBy === 'input') sortedItems = items;

  if(sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if(sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return( 
    <div className="list">
      <ul>
        {sortedItems.map((item)=> (<Item item={item} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} key={item.id} />))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
      
    </div>
  );
}

function Item({item, onDeleteItem, onUpdateItem}) {
  return( 
    <li>
      <input type="checkbox" checked={item.packed} onChange={() => onUpdateItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
export default PackingList
