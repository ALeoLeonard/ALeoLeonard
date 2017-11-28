import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin: 20px 5px 0px;
  cursor: crosshair;
  cursor: url(/public/images/cursor_white.svg) 10.5 5,crosshair;
`

const Boosted = styled.li`
  background-image: url(/public/images/boosted.svg);
  height: 80px;
  width: 50px;
  margin-left: 1em;
  cursor: crosshair;
  cursor: url(/public/images/cursor_white.svg) 10.5 5,crosshair;
  &:hover {
    background-color:#CF873B;
  }
`

const Camping = styled.li`
  background-image: url(/public/images/camp_icon.svg);
  height: 64px;
  width: 96px;
  margin-left: 4em;
  cursor: crosshair;
  cursor: url(/public/images/cursor_white.svg) 10.5 5,crosshair;
  transform: rotate(90deg) translate(0,100%);
  &:hover {
    background-color:#8EE067;
  }
`
const Workout = styled.li`
  background-image: url(/public/images/workout.svg);
  height: 60px;
  width: 96px;
  cursor: crosshair;
  margin-left: -2em;
  cursor: url(/public/images/cursor_white.svg) 10.5 5,crosshair;
  transform: rotate(90deg) translate(0,100%);
  &:hover {
    background-color:#C058AA;
  }
`

const Sidebar = () => (
  <aside>
    <div id='aside-inner'>
      <ul>
        <li id='about-btn' className=''>about</li>
        <Link to='/Camping'><Boosted /></Link>
        <Link to='/Camping'><Camping /></Link>
        <Link to='/Workout'><Workout /></Link>
        <li><a href='mailto:ALeoLeonard@gmail.com' target='blank'>ALeoLeonard@gmail.com</a></li>
      </ul>
      <Link to='/'><Logo src='/public/images/logo.gif' loop='infinite' /></Link>
    </div>
  </aside>
)

export default Sidebar
