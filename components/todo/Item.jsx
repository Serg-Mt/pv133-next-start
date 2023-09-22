export function createItem(text) {
  return { id: Math.random(), text, checked: false };
}

export default function Item({ item, delItem, toggleCheckbox }) {
  console.debug('render Item ', item.id);
  return <li>
    <input type="checkbox" value={item.checked} onChange={()=>toggleCheckbox(item.id)}/>
    <span>{item.text}</span>
    <button onClick={() => delItem(item.id)}>❌Delete</button>
    {item.checked ? '❎' : '⬜'} 
  </li>;
}