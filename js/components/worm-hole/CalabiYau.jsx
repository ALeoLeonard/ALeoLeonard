import React from 'react'
import styled from 'styled-components'
import BlackHole from './BlackHole'
import ERB from './ERB'
import WhiteHole from './WhiteHole'
import ChemicalSoup from './ChemicalSoup'

const CalabiYauContainer = styled.div`
  display: block;
  width: 900px;
  height: 4000px;
  margin: 50px auto 0px;
  background-color: #F9F9F9;
`
const CalabiYau = () => (
  <CalabiYauContainer>
    <BlackHole />
    <ERB />
    <WhiteHole />
    <ChemicalSoup />
  </CalabiYauContainer>
)

export default CalabiYau
