import React, { useContext } from "react"
import UserContext from "../context/userContext"

const Profile = () => {
    const {user} = useContext(UserContext)
  if (!user) {
    return <div>Log in</div>
  } else {
    return <div>Welcome, {user.userName} </div>
  }
}
export default Profile