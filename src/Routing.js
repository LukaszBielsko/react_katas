import React, { useState } from 'react'
import {
  Route,
  Redirect,
  useHistory
} from "react-router-dom";

const Routing = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isUser, setIsUser] = useState(false)
  const history = useHistory()

  return (
    <section>
      <h2>Routing</h2>
      <Route exact path="/">
        <Home setIsUser={setIsUser} setIsAdmin={setIsAdmin} />
      </Route>
      {isUser && <Redirect to='/user-profile' />}
      {isAdmin && <Redirect to='/dashboard' />}
      <Route path="/user-profile">
        <UserProfile />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <button onClick={history.goBack}>Go back</button>
      <p>Go back wont take you back to previous screen as previous location was replaced</p>
    </section>
  )
}

export default Routing

function Dashboard() {
  return <p>This is admin dashboard</p>
}

function UserProfile() {
  return <p>This is user profile</p>
}

function Home(props) {
  const handleAdmin = () => {
    props.setIsAdmin(true)
  }

  const handleUser = () => {
    props.setIsUser(true)
  }

  return (
    <div>
      <p>Are your an admin?</p>
      <button onClick={handleAdmin}>Yes</button>
      <p>Or a user?  </p>
      <button onClick={handleUser}>Yes, I'm a user</button>
    </div>
  )
}

