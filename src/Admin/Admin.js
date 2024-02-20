import React from 'react'
import AdminNav from './Admin.nav'
import './From.Admin.css';
import Dashboard from './Dashboard';

function Admin() {
  return (
    <>
        <AdminNav className='shadow-lg'/>
        <Dashboard />
    </>
  )
}

export default Admin