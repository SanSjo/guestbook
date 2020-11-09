import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router'
import { Header } from 'components/Header';
import { TopHeader } from '../components/TopHeader'
import '../style/style.css'

const URL = 'http://localhost:8080/signup';

export const SignupPage = () => {
  const [name, setName] = useState('');
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
          setErrorMessage('User already exist');
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
    <>
    <TopHeader />
    <section style={{display: 'flex', justifyContent: 'center'}}>
    
    <div style={{ height: 500 }}>
     
      <Header />
    </div>
    <div style={{ width: '50%' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Log in to create your post</h2>
      </div>
      <Form style={{ display: 'flex', flexDirection: 'column', padding: '5%' }} onSubmit={handleSubmit}>
        <FormGroup className="signupInputContainer">
          <Label>User name</Label>
          <Input type="text" placeholder="User name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
        </FormGroup>
        {/* <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </FormGroup> */}
        <FormGroup className="signupInputContainer">
          <Label>Password</Label>
          <Input type="password" placeholder="Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </FormGroup>
        {errorMessage && <div>{errorMessage}</div>}
        {successMessage && <div>{successMessage}</div>}

        <button className="signupBtn">Submit</button>
        <button className="signupBtn" onClick={onLoginPage}>Log in</button>
      </Form>
    </div>
    </section>
    </>
  )
}

export default SignupPage;

