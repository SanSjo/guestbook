import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SignupPage } from './pages/SignupPage'
import { LoginPage } from './pages/LoginPage'
import { MemberPage } from './pages/MemberPage'
import { HomePage } from './pages/HomePage'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <div>
            <HomePage />
          </div>
        </Route>
        <Route path="/SignupPage" exact>
          <div>
            <SignupPage />
          </div>
        </Route>
        <Route path="/LoginPage" exact>
          <div>
            <LoginPage />
          </div>
        </Route>
        <Route path="/Guestbook">
          <div>
            <MemberPage />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
