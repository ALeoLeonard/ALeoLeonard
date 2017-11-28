import React from 'react'
import styled from 'styled-components'

const WhiteHoleContainer = styled.div`
  position: relative;
  top: -420px;
  left: 344px;
  z-index: 4;
`

const WhiteHoleImage = styled.img`
  margin-top: 70px;
`

const WhiteHole = () => (
  <WhiteHoleContainer>
    <WhiteHoleImage src='public/images/white_hole.gif' />
  </WhiteHoleContainer>
)

export default WhiteHole
