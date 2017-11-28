import styled from 'styled-components'
import rotate360 from '../../helpers/keyframes/rotate360'

const ThreeBillion = styled.div`
  background-image: url(public/images/3_billion.png);
  position:relative; 
  top:-466px; 
  z-index: 2;
  width:518px; 
  height:518px;
  margin: 0 auto;
  animation: ${rotate360} 150s linear infinite;

  @media (max-width: 808px) {
    transform: scale(.25,.25);
  }
`

export default ThreeBillion
