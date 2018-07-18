import React from 'react'
import { Link } from 'react-router-dom'

const Contacts = () => (
  <div>
    <ul>
      <li><Link to="/contacts/jose">Jose</Link></li>
      <li><Link to="/contacts/pedro">Pedro</Link></li>
    </ul>
  </div>
)

export default Contacts