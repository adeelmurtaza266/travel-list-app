import '../index.css';

function PackingList({ items}) {
  return( 
    <div className="list">
      <ul>
        {items.map((item)=> (<Item item={item} key={item.id} />))}
      </ul>
    </div>
  );
}

function Item({item}) {
  return( 
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
export default PackingList
