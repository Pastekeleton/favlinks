import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('');
  const [URL, setURL] = useState('');
  const handleChange = (event) => {
    console.log(event.target.name);
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  return (
    <form>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
      <label htmlFor='name'>
        Name
      </label><br/>
      <input type='text' name='name' value={name}/>
      <br/>
      <label htmlFor='URL'>
        URL
      </label><br/>
      <input type='text' name='URL' value={URL}/>
    </form>
  )
}

export default Form
