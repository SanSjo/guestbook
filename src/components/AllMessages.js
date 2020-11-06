import React from 'react';
import { Card } from 'reactstrap';
import { DeleteMessage } from './DeleteMessage'
import { EditMessages } from './EditMessages'

export const AllMessages = (props) => {
  const handleFormSubmit = () => {
    props.handleDelete();
  }

  const handleDeleteButton = () => {
    fetch(`http://localhost:8080/messages/${props.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => handleFormSubmit())
      .catch((err) => {
        console.log('Error:', err)
      })
  }

  const handleEditButton = (newValue) => {
    fetch(`http://localhost:8080/messages/${props.id}`, {
      method: 'PUT',
      body: JSON.stringify({ message: newValue }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => handleFormSubmit())
      .catch((err) => {
        console.log('Error:', err)
      })
  }

  return (
    <div>
      <div>
        <Card>
          <div>
            <p>{props.author}</p>
          </div>
          <div>
            <p>{props.message.message}</p>
          </div>
          <div>
            <DeleteMessage id={props.id} item={props.message} delete={handleDeleteButton} />
          </div>
          <div>
            <EditMessages id={props.id} item={props.message} editMessage={handleEditButton} />
          </div>
        </Card>
      </div>
    </div>
  )
}