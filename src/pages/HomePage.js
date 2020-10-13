import React from 'react'
import { ProductConsumer } from '../context/context'

const HomePage = () => {
  return (
    <>
      <ProductConsumer>
        {value => {
          console.log(value)
          return <h1>HomePage</h1>
        }}
      </ProductConsumer>
    </>
  )
}

export default HomePage
