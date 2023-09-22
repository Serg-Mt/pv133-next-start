import { useState } from 'react';
import Form from './Form';
import { createItem } from './Item';
import List from './List';

export default function ToDoApp() {
  const
    [list, setList] = useState([createItem('дело 1'), createItem('дело 2')]);
  return <>
    <Form addItem={text => setList(list.concat(createItem(text)))} />
    <List
      list={list}
      delItem={id => setList(list.filter(item => id !== item.id))}
      toggleCheckbox={id => {
        const
          index = list.findIndex(item => id === item.id),
          { checked, ...old } = list[index],
          elem = Object.assign({}, old, { checked: !checked });
        //   elem = { ...list[index] };
        // elem.checked = !elem.checked;
        setList(list.with(index, elem));
      }}
    />
  </>;
}