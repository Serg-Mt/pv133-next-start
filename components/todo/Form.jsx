import { useState } from 'react';
import Button from './Button';

export default function Form({ addItem }) {
  const
    [value, setValue] = useState('-');
  console.debug('render Form');
  return <fieldset>
    <legend>Form</legend>
    <input value={value} onInput={evt => setValue(evt.target.value)} />
    <Button onClick={() => { setValue(''); addItem(value); }}>➕Add</Button>
  </fieldset>

}