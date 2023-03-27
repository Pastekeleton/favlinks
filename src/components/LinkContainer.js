import { useState } from 'react'
import Table from './Table'
import Form from './Form';

const LinkContainer = (props) => {
  const [linkData, setLinkData] = useState([]);
  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <Table/>

      <br />

      <h3>Add New</h3>
      <Form/>
    </div>
  )
}

export default LinkContainer
