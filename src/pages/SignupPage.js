import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router'

const URL = 'http://localhost:8080/signup';

export const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.ok) {
          setSuccessMessage('User created');
          setErrorMessage(false);
          return res.json()
        } else {
          setErrorMessage('Could not create user');
          setSuccessMessage(false);
          return res.text().then((json) => {
            throw new Error(json);
          });
        }
      })
      .then((user) => console.log('created user:', user))
      .catch((err) => {
        console.error(err);
      })
  }

  const onLoginPage = () => {
    history.push('./LoginPage')
  }

  return (
    <div>
      <h1>Welcome to the guest book</h1>
      <h2>Log in to create your post</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>User name</Label>
          <Input type="text" placeholder="User name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </FormGroup>
        {/* <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </FormGroup> */}
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </FormGroup>
        {errorMessage && <div>{errorMessage}</div>}
        {successMessage && <div>{successMessage}</div>}

        <Button>Submit</Button>
        <Button onClick={onLoginPage}>Log in</Button>
      </Form>
    </div>
  )
}

export default SignupPage;