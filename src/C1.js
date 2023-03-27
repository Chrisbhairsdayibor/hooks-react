import React from 'react'
import {useFetch} from './useFetch'

export default function C1() {
    const {data}=useFetch()
  return (
    <div>
      <Pre>{JSON.stringify(data, null, 2)}</Pre>
  <h1>C1</h1>
    </div>
  )
}