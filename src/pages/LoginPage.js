import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router'
import { Header } from '../components/Header'
import { TopHeader } from '../components/TopHeader'

const URL = 'http://localhost:8080/login';

export const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null)
  const history = useHistory();

  const handleSubmitLogin = (event) => {
    event.preventDefault();

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          return res.text().then((json) => {
            throw new Error(json);
          });
        }
      })
      .then((user) => {
        // eslint-disable-next-line dot-notation
        if (user['message']) {
          setErrorMessage(user.message);
        } else {
          window.localStorage.setItem('userId', user.userId);
          window.localStorage.setItem('accessToken', user.accessToken)

          if (name < 0) {
            return alert('Please fill in name and password');
          } else {
            history.push('/GuestBook');
          }
        }
      })
      .catch((err) => console.log('error:', err));
  }

  return (
    <>
    <TopHeader />
    <section style={{display: 'flex', justifyContent: 'center'}}>
    <div style={{ height: 500 }}>
      <Header />
    </div>
    <div style={{width: '50%'}}>
    <Form style={{ display: 'flex', flexDirection: 'column', padding: '5%' }} onSubmit={handleSubmitLogin}>
      <FormGroup className="signupInputContainer">
        <Label>User</Label>
        <Input type="text" placeholder="Enter username" name="name" value={name} onChange={(event) => setName(event.target.value)} />
      </FormGroup>
      <FormGroup className="signupInputContainer">
        <Label>Password</Label>
        <Input type="password" placeholder="Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </FormGroup>
      {errorMessage && <div>{errorMessage}</div>}

      <Button>Login</Button>
    </Form>
    </div>
    </section>
    </>
  )
}

export default LoginPage;