import React from 'react'
import Button from './Button'

import "../css/FirstFold.css"


export const FirstFold = () => {
  return (
    <div id='first_fold_container'>
        {/* <NavBar /> */}
        <div className='left'>
            <h1 className='common_css'>Consolidate your restaurants' insights in one place. Unlock growth.</h1>
            <p className='common_css'>Your one stop solution to view mission-critical data and insights from all your locations in one place.</p>
        <Button title="Book Demo" href="#second_fold_container" />

        </div>
        <div className='right'>
            <img src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp" height="100%" alt="" />

        </div>
    </div>
  )
}
