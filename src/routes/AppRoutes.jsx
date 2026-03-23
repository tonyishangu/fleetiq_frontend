import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Orders from '../pages/Orders'
import Trips from '../pages/Trips'
import Fuel from '../pages/Fuel'
import Workshop from '../pages/Workshop'
import Reports from '../pages/Reports'
import Adminstration from '../pages/Adminstration'


const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path='/orders' element={<Orders />}/>
       <Route path='/trips' element={<Trips />} />
       <Route path='/fuel' element={<Fuel />}/>
       <Route path='/workshop' element={<Workshop />}/>
       <Route path='/reports' element={<Reports />}/>
       <Route path='/adminstration' element={<Adminstration />}/>
    </Routes>
  )
}

export default AppRoutes