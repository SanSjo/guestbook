import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SignupPage } from './pages/SignupPage'
import { LoginPage } from './pages/LoginPage'
import { MemberPage } from './pages/MemberPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <div>
            <SignupPage />
          </div>
        </Route>
        <Route path="/LoginPage" exact>
          <div>
            <LoginPage />
          </div>
        </Route>
        <Route>
          <div>
            <MemberPage />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
