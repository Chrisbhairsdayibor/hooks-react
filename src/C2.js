import React from 'react'
import useFetch from './useFetch'

export default function C2() {

    const [data]= useFetch(45)
  return (
    <div>
      <h1>C2</h1>
    </div>
  )
}