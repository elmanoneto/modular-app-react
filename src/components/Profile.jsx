import React from 'react'

const Profile = ({ match }) => (
  <div>
   Ola, {match.params.name}
  </div>
)

export default Profile