import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  position: absolute;
  top: 80px;
  right: 360px;
  font-family: 'titillium web', san-serif;
  font-size: 100px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #C058AA;
  text-shadow: #3C2589 1px 1px 0px, #3C2589 2px 2px 0px, #3C2589 3px 3px 0px, #3C2589 4px 4px 0px, #3C2589 5px 5px 0px, #3C2589 6px 6px 0px, #3C2589 7px 7px 0px, #3C2589 8px 8px 0px, #3C2589 9px 9px 0px, #3C2589 10px 10px 0px;
`

const Intro = styled.div`
  float: right;
  font-family: 'titillium web', san-serif;
  font-size: 24px;
  color: #5991B2;
  width: 350px;
  z-index: 6;
  letter-spacing: 1px;
  position: absolute;
  top: 334px;
  left: 80px;
  cursor: pointer;
  -webkit-transition: transform 1s ease-in-out;
  -moz-transition: transform 1s ease-in-out;
  transition: transform 1s ease-in-out;
  text-shadow: #3C2589 1px 1px 0px, #3C2589 2px 2px 0px, #3C2589 3px 3px 0px, #3C2589 4px 4px 0px, #3C2589 5px 5px 0px, #3C2589 6px 6px 0px, #3C2589 7px 7px 0px, #3C2589 8px 8px 0px, #3C2589 9px 9px 0px, #3C2589 10px 10px 0px;
  &:hover {
    transform: scale(1.15);
    color: #A968BB;
    text-shadow: #381E78 1px 1px 0px, #381E78 2px 2px 0px, #381E78 3px 3px 0px, #381E78 4px 4px 0px, #381E78 5px 5px 0px, #381E78 6px 6px 0px, #381E78 7px 7px 0px, #381E78 8px 8px 0px, #381E78 9px 9px 0px, #381E78 10px 10px 0px;
  }
`

const About = () => (
  <div>
    <Title>Welcome</Title>
    <Intro>This universe is meant to be explored, don&#39;t sit still -- you&#39;ll always find your way home.</Intro>
  </div>
)

export default About
