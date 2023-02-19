import React from 'react'
import CardComponent from './CardComponent'
import './Home.css'
import logo from '../assets/logo.jpg'
import { Typography } from '@mui/material'

function HomeComponent() {
  return (
    <>
        <div className='header'>
        <img src={logo} alt='college logo'></img>
        <Typography className="image-selection-text" variant="h6" sx={{}}>
            Battle of Brains
          </Typography>
        </div>
        <div className='home-container'>
            {[...Array(20)].map((_, index) => {
                return (
                    <CardComponent id={index+1} key={index} />
                )
            })}
        </div>
    </>
  )
}

export default HomeComponent