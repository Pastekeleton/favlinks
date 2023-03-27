import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('');
  const [URL, setURL] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    setName('');
    setURL('');
  }

  return (
    <form>
      <label htmlFor='name'>Name</label><br/>
      <input type='text' name='name' value={name} onChange={(event)=> setName(event.target.value)}/>
      
      <br/>
      
      <label htmlFor='URL'>URL</label><br/>
      <input type='text' name='URL' value={URL} onChange={(event)=> setURL(event.target.value)}/><br/>
      
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
