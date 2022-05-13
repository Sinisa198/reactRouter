import React from 'react'
import { useState } from 'react'
 export const Login = () => {
     const [ user, setUser] = useState('')
  return (
    <div>
      <label>
          Username:{''}
          <input type='text' onChange={(e) => setUser(e.targer.value)}/>
      </label>
    </div>
  )
}

export default Login
