import React from 'react'
import styled from 'styled-components'

const BlackHoleContainer = styled.div`
  position: relative;
  left: 150px;
  z-index: 4;
`

const BlackHoleImage = styled.img`
  display: inline;
  height: 308px;
  width: 635px;
  margin-top: 50px;
`

const BlackHole = () => (
  <BlackHoleContainer>
    <BlackHoleImage src='public/images/black_hole.gif' />
  </BlackHoleContainer>
)

export default BlackHole
