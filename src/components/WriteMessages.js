import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export const WriteMessages = (props) => {
  const [message, setMessage] = useState('');

  const handleForm = (event) => {
    event.preventDefault()
    props.submitForm(message);
    setMessage('');

  }

  return (
    <>
      <Form>
        {/* <FormGroup>
          <Label>Whats your name</Label>
          <Input type="textarea" name="text" onChange={(event) => setAuthor(event.target.value)} />
        </FormGroup> */}
        <FormGroup>
          <Label>Write a greeting in the guestbook</Label>
          <Input type="textarea" name="text" value={message} onChange={(event) => setMessage(event.target.value)} />
        </FormGroup>
        <FormGroup>
          <Button onClick={handleForm}>Send greeting</Button>
        </FormGroup>

      </Form>
    </>
  )
}