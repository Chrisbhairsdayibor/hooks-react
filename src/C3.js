import React, { useContext } from 'react'
import { DataContext } from './App'

export default function C3() {


    const {secretData}=useContext(DataContext)
  return (
    <div>
        {secretData}
      <h1>C3</h1>
      
    </div>
  )
}