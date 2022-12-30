import React from 'react'
import CardComponent from './CardComponent'
import './Home.css'

function HomeComponent() {
  return (
    <>
        <div className='home-container'>
            {[...Array(100)].map((_, index) => {
                return (
                    <CardComponent id={index+1} key={index} />
                )
            })}
        </div>
    </>
  )
}

export default HomeComponent