import React from 'react'
import { Outlet } from 'react-router-dom'
export const Admin = () => {
  return (
    <div>
      Admin user
      <Outlet />
    </div>
  )
}

export default Admin
