import React, { useState } from 'react'
import CoverForm from './CoverForm'

function HeroSection() {

    const data = [
        {
            location: "Amazon Forest",
            weather: "Idel for Travel",
            timing: "From 7:20am",
            condition: {available: true, color: "#386641"},
        },
        {
            location: "African Forest",
            weather: "Not idel for Travel",
            timing: "------------",
            condition: {available: false, color: "#BC4749"},
        }
    ]
  return (
    <div className='heroSection'>
        <div className="heroSectionHeadings">
            <h3>Get Closer To</h3>
            <h1>NATURE</h1>
        </div>

        <div className="coverBox">
            {/* <CoverForm/> */}
            {data.map((x,i) => (
            <CoverForm data = {x}/>
            ))}
        </div>
    </div>
  )
}

export default HeroSection