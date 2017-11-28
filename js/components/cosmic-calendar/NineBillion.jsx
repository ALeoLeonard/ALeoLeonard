import styled from 'styled-components'
import rotate360 from '../../helpers/keyframes/rotate360'

const NineBillion = styled.div`
  background-image: url(public/images/9_billion.png);
  position:relative; 
  top:-1643px; 
  z-index: 3;
  width:633px; 
  height:632px; 
  margin: 0 auto;
  animation: ${rotate360} 300s linear infinite;

  @media (max-width: 808px) {
    transform: scale(.25,.25);
  }
`

export default NineBillion
